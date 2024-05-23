import React from 'react';
import '@atlaskit/css-reset';
import styled from 'styled-components';
import Column from './components/Column';
import AddColumnButton from './components/AddColumnButton';
import ItemPool from './components/ItemPool';
import TrashCan from './components/TrashCan';
import { TierListContext } from './TierListContext';
import { getPlaylistItems } from '../sidebar/actions/result';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Button, Offcanvas, Dropdown, DropdownButton, OverlayTrigger, Tooltip, Image, Modal, Form, InputGroup, Spinner} from 'react-bootstrap';
import _ from 'lodash';
import { toJpeg, toPng, toSvg } from 'html-to-image';
import LZString from 'lz-string';
import SidebarSearch from '../sidebar/SidebarSearch'
import RegionSelector from '../sidebar/components/RegionSelector'
import search_img from './imgs/search.svg'
import items_img from './imgs/playlist.svg'
import './tierlist-styles.css';

import AudioPlayer from './components/AudioPlayer';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const saveFileTypes = ["jpeg", "png", "svg"];

let refreshSidebar = false;
let refreshColumns = false;
let showSearchbar = false;
let showItemPool = false;
let showItemNotifBadge = false;
let showErrorModal = false;
let errorModalText = "bottom text";
let showPlaylistModal = false;
let playlistModalText = "";
let playlistModalIsLoading = false;
let toggleEditMode = false;

let currentAudio = null;

class InnerList extends React.PureComponent {
  render() {
    const presetColors = ["#F63E02", "#F5B700", "#1DB954", "#4D9DE0", "#360568", "#DC3CA0"];
    const { column, itemMap, index, updateHeader, deleteHandler, toggleEditMode } = this.props;
    const items = column.itemIds.map(itemId => itemMap[itemId]);
    return <Column key={refreshColumns} column={column} items={items} index={index} updateHeader={updateHeader} deleteHandler={deleteHandler} presetColors={presetColors} toggleEditMode={toggleEditMode}/>;
  }
}

class TierList extends React.Component {
  static contextType = TierListContext;
  state = sessionStorage.getItem('saveState') !== null ? JSON.parse(LZString.decompress(sessionStorage.getItem('saveState'))) : this.context.data;

  saveStateToStorage = () => sessionStorage.setItem('saveState', LZString.compress(JSON.stringify(this.state)));

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.saveStateToStorage);
    this.resizeObserver.unobserve(this.textarea);
  }

  componentDidMount() {
    window.addEventListener("beforeunload", this.saveStateToStorage);

    this.resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        if (entry.target === this.textarea) {
          this.textarea.style.height = 'inherit';
          this.textarea.style.height = `${this.textarea.scrollHeight}px`;
        }
      }
    });

    this.textarea = document.querySelector('.title-heading');
    this.textarea.style.height = 'inherit';
    this.textarea.style.height = `${this.textarea.scrollHeight}px`;
    this.resizeObserver.observe(this.textarea);

    this.context.containsItem = (id, type) => {
      if(id in this.state.items) {
        return this.state.items[id]['type'] === type;
      }
      return false;
    };

    this.context.addToItemPool = (id, type, songURL, imgURL, title, subtitle, audioURL, isExplicit) => {
      if(this.context.containsItem(id, type)) return; // do nothing
      const newItems = {
        ...this.state.items,
        [id]: {
          id: id,
          type: type,
          songURL: songURL,
          imgURL: imgURL,
          title: title,
          subtitle: subtitle,
          audioURL: audioURL,
          isExplicit: isExplicit
        }
      }
      const newItemIds = Array.from(this.state.columns['item-pool'].itemIds).concat(id);
      const newItemPool = {
        ...this.state.columns['item-pool'],
        itemIds: newItemIds
      }
      const newState = {
        ...this.state,
        items: newItems,
        columns: {
          ...this.state.columns,
          'item-pool': newItemPool
        }
      };
      showItemNotifBadge = !showItemPool;
      this.setState(newState);
    };
    
    this.context.deleteFromItemPool = (id, type) => {
      if(!this.context.containsItem(id, type)) return; // do nothing
      let newItems = this.state.items;
      delete newItems[id];

      let newColumns = this.state.columns;
      Object.keys(newColumns).forEach(function(key) {
        const delIndex = newColumns[key].itemIds.indexOf(id);
        if(delIndex !== -1) newColumns[key].itemIds.splice(delIndex, 1);
      });

      const newState = {
        ...this.state,
        items: newItems,
        columns: newColumns
      }
      refreshColumns = !refreshColumns;
      if(this.state.columns['item-pool'].itemIds.length === 0) showItemNotifBadge = false;
      this.setState(newState);
    }

    this.context.addManyToItemPool = (items, type) => {
      for(let i = 0; i < items.length; i++) {
        let item = items[i];
        this.context.addToItemPool(item.id, type, item.songURL, item.imgURL, item.title, item.subtitle, item.isExplicit, item.audioURL);
      }
    }

    this.context.deleteManyFromItemPool = (items, type) => {
      for(let i = 0; i < items.length; i++) {
        let item = items[i];
        this.context.deleteFromItemPool(item.id, type);
      }
    }

    this.context.getCurrentAudio = () => currentAudio;
    this.context.setCurrentAudio = (audio) => currentAudio = audio;
  }

  ////////////////// START OF IMPORT FROM JSON //////////////////
  hasRequiredKeys = (object, keys) => keys.every(key => key in object);
  
  isValidItemPool = (itemPool) => itemPool && itemPool.id === 'item-pool' && Array.isArray(itemPool.itemIds);
  
  hasValidColumns = (columns, requiredKeys) => {
    return Object.values(columns).every(column => {
      return this.hasRequiredKeys(column, requiredKeys);
    });
  }
  
  isColumnOrderValid = (columnOrder, columns) => columnOrder.length === columns.length && columnOrder.every(el => columns.includes(el));
  
  hasValidItems = (items, requiredKeys) => Object.values(items).every(item => this.hasRequiredKeys(item, requiredKeys));
  
  areItemIdsValid = (columns, items) => {
    const allItems = Object.keys(items);
    const itemIds = Object.values(columns).flatMap(column => column.itemIds);
    return itemIds.length === allItems.length && itemIds.every(id => allItems.includes(id));
  }
  
  showError = (message) => {
    showErrorModal = true;
    errorModalText = message;
    this.setState(this.state);
  }

  importFromJson = e => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      const newState = JSON.parse(e.target.result);
      const {'item-pool': itemPool, ...columns} = newState.columns;
  
      const requiredStateKeys = ['title', 'columnOrder', 'items', 'columns'];
      const requiredColumnKeys = ['id', 'title', 'color', 'itemIds'];
      const requiredItemKeys = ['id', 'type', 'songURL', 'imgURL', 'title', 'subtitle', 'isExplicit', 'audioURL'];
  
      if (!this.hasRequiredKeys(newState, requiredStateKeys) || !this.isValidItemPool(itemPool)) {
        this.showError("File is missing required keys or item-pool!");
        return;
      }
  
      if (!this.hasValidColumns(columns, requiredColumnKeys)) {
        this.showError("File is missing required column information!");
        return;
      }
  
      if (!this.isColumnOrderValid(newState.columnOrder, Object.keys(columns))) {
        this.showError("File columnOrder and columns don't match!");
        return;
      }
  
      if (!this.hasValidItems(newState.items, requiredItemKeys)) {
        this.showError("File is missing required item information!");
        return;
      }
  
      if (!this.areItemIdsValid(newState.columns, newState.items)) {
        this.showError("File items and itemIds don't match!");
        return;
      }
  
      toggleEditMode = false;
      showItemNotifBadge = newState.columns['item-pool'].itemIds.length > 0 && !showItemPool;
      refreshSidebar = !refreshSidebar;
      this.setState(newState);
      console.log("Successfully imported from JSON!");
    };
  }
  ////////////////// END OF IMPORT FROM JSON //////////////////

  importFromPlaylist = async () => {
    playlistModalIsLoading = true;
    this.setState(this.state);
    const result = await getPlaylistItems(playlistModalText);

    let cacheKey = `playlist_${playlistModalText}`;
    if(sessionStorage.getItem(cacheKey) === null) {
      let playlistContents = [];
      if(result === undefined || result[0] === undefined) {
        showErrorModal = true;
        errorModalText = "Playlist does not exist (or is private)!"
        return null;
      }
      this.removeAllItems();
      for(let i = 0; i < result.length; i++) {
        let item = result[i].track;
        playlistContents.push({
          id: item.id,
          type: 'track',
          songURL: item.external_urls.spotify,
          imgURL: !_.isEmpty(item.album.images) ? item.album.images[0].url : null,
          title: item.name,
          subtitle: item.artists.map((artist) => artist.name).join(', ')
        })
      }
      sessionStorage.setItem(cacheKey, LZString.compress(JSON.stringify(playlistContents)));
    }
    let tracklist = JSON.parse(LZString.decompress(sessionStorage.getItem(cacheKey)))
    this.context.addManyToItemPool(tracklist, 'track')
    return tracklist
  }

  saveAsIMG (fileType) {
    toggleEditMode = false;
    this.setState(this.state, () => {
      const saveIMG = (dataUrl) => {
        const link = document.createElement('a');
        link.download = 'tierlist.'.concat(fileType);
        link.href = dataUrl;
        link.click();
        URL.revokeObjectURL(link.href);
      }
  
      let tierlist = document.getElementById('tierlist-inner');
      let displayWidth = tierlist.getBoundingClientRect().width;
      let fullWidth = tierlist.scrollWidth, fullHeight = tierlist.scrollHeight;
      if(fullWidth > displayWidth) fullWidth += 8;
      
      if(fileType === "jpeg") {
        toJpeg(tierlist, {backgroundColor: '#121212', pixelRatio: 2, width: fullWidth, height: fullHeight})
          .then(saveIMG).catch((err) => { showErrorModal = true; errorModalText = err; this.setState(this.state); });
      }
      if(fileType === "png") {
        toPng(tierlist, {backgroundColor: '#121212', pixelRatio: 2, width: fullWidth, height: fullHeight})
          .then(saveIMG).catch((err) => { showErrorModal = true; errorModalText = err; this.setState(this.state); });
      }
      if(fileType === "svg") {
        toSvg(tierlist, {backgroundColor: '#121212', width: fullWidth, height: fullHeight})
          .then(saveIMG).catch((err) => { showErrorModal = true; errorModalText = err; this.setState(this.state); });
      }
    });
  }

  updateTitle = (title) => {
    // console.log(this.state.title, title)
    const newState = {
      ...this.state,
      title: title
    };
    this.setState(newState);
  }

  deleteItem = (id, source, home) => {
    const homeitemIds = Array.from(home.itemIds);
    homeitemIds.splice(source.index, 1);
    const newHome = {
      ...home,
      itemIds: homeitemIds,
    };

    const oldItems = this.state.items;
    const newItems = Object.keys(oldItems).reduce((object, key) => {
      if (key !== id) {
        object[key] = oldItems[key];
      }
      return object;
    }, {});

    const newState = {
      ...this.state,
      items: newItems,
      columns: {
        ...this.state.columns,
        [newHome.id]: newHome,
      },
    };

    refreshSidebar = !refreshSidebar;
    this.setState(newState);
  }

  updateColHeader = (id, newTitle, newColor) => {
    const oldHeader = this.state.columns[id];
    const newHeader = {
      ...oldHeader,
      title: newTitle,
      color: newColor
    };
    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [id]: newHeader
      }
    };
    this.setState(newState);
  }

  addNewCol = (index) => {
    const ID = `column-${new Date().getTime()}`;
    let newColumnOrder = this.state.columnOrder;
    newColumnOrder.splice(index, 0, ID);
    
    const newState = {
      ...this.state,
      columnOrder: newColumnOrder
    };
    newState['columns'][ID] = {
      id: ID,
      title: 'NEW',
      color: '#535353',
      itemIds: [],
    };
    this.setState(newState);
  }

  removeCol = (id, keepItems) => {
    const oldItems = this.state.items;
    const newItems = keepItems ? oldItems : Object.keys(oldItems).reduce((object, key) => {
      if(!this.state.columns[id].itemIds.includes(key)) {
        object[key] = oldItems[key];
      }
      return object;
    }, {});

    const newColumnOrder = Array.from(this.state.columnOrder);
    newColumnOrder.splice(newColumnOrder.indexOf(id), 1);

    const oldColumns = this.state.columns;
    if(keepItems) oldColumns['item-pool'].itemIds = oldColumns['item-pool'].itemIds.concat(oldColumns[id].itemIds);
    const newColumns = Object.keys(oldColumns).reduce((object, key) => {
      if (key !== id) {
        object[key] = oldColumns[key];
      }
      return object;
    }, {});

    const newState = {
      ...this.state,
      items: newItems,
      columns: newColumns,
      columnOrder: newColumnOrder,
    };

    refreshSidebar = !refreshSidebar;
    this.setState(newState);
  }

  resetAllItems = () => {
    let newColumns = this.state.columns;
    Object.keys(newColumns).forEach(function(key) {
      if(key === 'item-pool') return;
      newColumns['item-pool'].itemIds = newColumns['item-pool'].itemIds.concat(newColumns[key].itemIds);
      newColumns[key].itemIds = [];
    });

    const newState = {
      ...this.state,
      columns: newColumns
    };
    
    toggleEditMode = false;
    showItemNotifBadge = newState.columns['item-pool'].itemIds.length > 0 && !showItemPool;
    refreshColumns = !refreshColumns;
    this.setState(newState);
  }

  removeAllItems = () => {
    this.resetAllItems();
    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        'item-pool': {
          id: 'item-pool',
          itemIds: [],
        }
      },
      items: {},
    };

    toggleEditMode = false;
    showItemNotifBadge = false;
    refreshSidebar = !refreshSidebar;
    this.setState(newState);
  }

  resetAllColumns = () => {
    this.resetAllItems();
    const newState = {
      ...this.state,
      columns: {
        'column-1': {
          id: 'column-1',
          title: 'S',
          color: '#DC3CA0',
          itemIds: [],
        },
        'column-2': {
          id: 'column-2',
          title: 'A',
          color: '#F63E02',
          itemIds: [],
        },
        'column-3': {
          id: 'column-3',
          title: 'B',
          color: '#F5B700',
          itemIds: [],
        },
        'column-4': {
          id: 'column-4',
          title: 'C',
          color: '#1DB954',
          itemIds: [],
        },
        'item-pool': {
          ...this.state.columns['item-pool']
        }
      },
      columnOrder: ['column-1', 'column-2', 'column-3','column-4']
    }

    toggleEditMode = false;
    this.setState(newState);
  }

  resetTitle() {
    this.setState({ title: 'Spotify Tier List Maker' }, () => {
      const textarea = document.querySelector('.title-heading');
      textarea.style.height = 'inherit';
      textarea.style.height = `${textarea.scrollHeight}px`;
    });
  }

  resetTierList = () => {
    this.resetAllItems();
    this.resetTitle();
    const newState = {
      ...this.state,
      title: 'Spotify Tier List Maker',
      columns: {
        'column-1': {
          id: 'column-1',
          title: 'S',
          color: '#DC3CA0',
          itemIds: [],
        },
        'column-2': {
          id: 'column-2',
          title: 'A',
          color: '#F63E02',
          itemIds: [],
        },
        'column-3': {
          id: 'column-3',
          title: 'B',
          color: '#F5B700',
          itemIds: [],
        },
        'column-4': {
          id: 'column-4',
          title: 'C',
          color: '#1DB954',
          itemIds: [],
        },
        'item-pool': {
          id: 'item-pool',
          itemIds: [],
        }
      },
      items: {},
      columnOrder: ['column-1', 'column-2', 'column-3','column-4']
    };
    
    toggleEditMode = false;
    showItemNotifBadge = false;
    refreshSidebar = !refreshSidebar;
    this.setState(newState);
  }

  showSearch = (show) => {
    if(show) {
      document.getElementById("tierlist-all").classList.add("show-search");
      document.getElementById("search-toggle").classList.add("show-search");
    }
    else {
      document.getElementById("tierlist-all").classList.remove("show-search");
      document.getElementById("search-toggle").classList.remove("show-search");
    }
    showSearchbar = show;
    this.setState(this.state);
  }

  showItems = (show) => {
    if(show) {
      document.getElementById("tierlist-all").classList.add("show-items");
      document.getElementById("itempool-toggle").classList.add("show-items");
    }
    else {
      document.getElementById("tierlist-all").classList.remove("show-items");
      document.getElementById("itempool-toggle").classList.remove("show-items");
    }
    showItemPool = show;
    showItemNotifBadge = false;
    this.setState(this.state);
  }

  onDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    if (type === 'column') {
      const newColumnOrder = Array.from(this.state.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...this.state,
        columnOrder: newColumnOrder
      };
      this.setState(newState);
      return;
    }

    const home = this.state.columns[source.droppableId];
    const foreign = this.state.columns[destination.droppableId];

    if (destination.droppableId === 'trash-can') {
      this.deleteItem(draggableId, source, home);
      return;
    }

    if (home === foreign) {
      const newitemIds = Array.from(home.itemIds);
      newitemIds.splice(source.index, 1);
      newitemIds.splice(destination.index, 0, draggableId);

      const newHome = {
        ...home,
        itemIds: newitemIds
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newHome.id]: newHome
        }
      };

      this.setState(newState);
      return;
    }

    // moving from one list to another
    const homeitemIds = Array.from(home.itemIds);
    homeitemIds.splice(source.index, 1);
    const newHome = {
      ...home,
      itemIds: homeitemIds,
    };

    const foreignitemIds = Array.from(foreign.itemIds);
    foreignitemIds.splice(destination.index, 0, draggableId);
    const newForeign = {
      ...foreign,
      itemIds: foreignitemIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newHome.id]: newHome,
        [newForeign.id]: newForeign,
      },
    };
    this.setState(newState);
  };

  render() {
    return (
      <div id="tierlist-all" style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
        <Modal id="delete-modal" show={showErrorModal} onHide={() => {showErrorModal = false; this.setState(this.state);}} size="sm">
          <Modal.Header closeButton closeVariant="white">
            <Modal.Title style={{color: '#F30000'}}>Error!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {errorModalText}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" id="keep-items" onClick={() => {showErrorModal = false; this.setState(this.state);}}>Okay</Button>
          </Modal.Footer>
        </Modal>
        <Modal id="playlist-modal" show={showPlaylistModal} onHide={() => {showPlaylistModal = false; this.setState(this.state); playlistModalText = "";}} backdrop={playlistModalIsLoading ? 'static' : true}>
          <Modal.Header closeButton={!playlistModalIsLoading} closeVariant="white">
            <Modal.Title style={{fontWeight: 'bold'}}>Import from Playlist</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{width: '27rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Form onSubmit={async (event) => {event.preventDefault(); await this.importFromPlaylist(); showPlaylistModal = false; playlistModalText = ""; this.setState(this.state);}}>
              <InputGroup style={{width: '24rem'}}>
                <InputGroup.Text id="search-flag" style={{fontSize: '0.75rem', borderRadius: '1rem 0 0 1rem', borderLeftStyle: 'solid', borderRightStyle: 'none', color: '#777', padding: '0.25rem 0.25rem 0.25rem 0.5rem'}}>open.spotify.com/playlist/</InputGroup.Text>
                <Form.Control
                  type="search"
                  name="searchTerm"
                  value={playlistModalText}
                  placeholder="playlist id"
                  onChange={(event) => { playlistModalText = event.target.value; this.setState(this.state); }}
                  autoComplete="off"
                />
              </InputGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" id="keep-items" style={{display: playlistModalIsLoading ? 'none' : 'inline-block'}} onClick={async () => {await this.importFromPlaylist(); showPlaylistModal = false; playlistModalText = ""; playlistModalIsLoading = false; this.setState(this.state);}}>Import</Button>
            <div id="playlist-loading" style={{display: playlistModalIsLoading ? 'flex' : 'none'}}>
              <Spinner animation="border" role="status" style={{marginRight: '0.5rem'}}/>
              Loading...
            </div>
          </Modal.Footer>
        </Modal>

        <div style={{margin: '0.5rem 0 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <textarea 
            type="text"
            value={this.state.title}
            placeholder='Tier List Title'
            onBlur={e => {
              if (e.target.value === '') this.updateTitle('Spotify Tier List Maker');
            }}
            onChange={e => this.updateTitle(e.target.value)}
            className="title-heading"
            onInput={e => {
              e.target.style.height = 'inherit';
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
            rows='1'
          />
        </div>
        
        <Container style={{flexWrap: 'wrap', margin: '0.5rem 3rem 0 3rem'}}>
          
          <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', margin: '0 1.5rem'}}>
            <OverlayTrigger
              placement={'top'}
              overlay={<Tooltip>Add/Delete Columns</Tooltip>}
            >
              <Button id="toolbar-button" style={toggleEditMode ? {color: "white"} : {}} size="lg" variant="outline-secondary" onClick={() => { toggleEditMode = !toggleEditMode; this.setState(this.state); }}>{toggleEditMode ? <span style={{color:"#1DB954"}}>✦</span> : ''} Edit{toggleEditMode ? 'ing' : ''}</Button>
            </OverlayTrigger>
            
            <OverlayTrigger
              placement={'top'}
              overlay={<Tooltip>Reset Placements</Tooltip>}
            >
              <DropdownButton
                className="toolbar-dropdown"
                size="lg"
                variant="outline-secondary"
                menuVariant="dark"
                title="Reset"
                menuRole="Reset placements"
              >
                <Dropdown.Item as="button" onClick={this.resetAllItems}>Reset All Items</Dropdown.Item>
                <Dropdown.Item as="button" onClick={this.removeAllItems}>Delete All Items</Dropdown.Item>
                <Dropdown.Item as="button" onClick={this.resetAllColumns}>Reset All Columns</Dropdown.Item>
                <Dropdown.Item as="button" onClick={this.resetTierList}>Reset Tier List</Dropdown.Item>
              </DropdownButton>
            </OverlayTrigger>

            <OverlayTrigger
              placement={'top'}
              overlay={<Tooltip>Save Image</Tooltip>}
            >
              <DropdownButton
                className="toolbar-dropdown"
                size="lg"
                variant="outline-secondary"
                menuVariant="dark"
                title="Save"
                menuRole="Save as image"
              >
                {saveFileTypes.map((fileType) => (
                  <Dropdown.Item as="button" key={fileType} type="button" onClick={() => this.saveAsIMG(fileType)}>Save as .{fileType}</Dropdown.Item>
                ))}
              </DropdownButton>
            </OverlayTrigger>

            <OverlayTrigger
              placement={'top'}
              overlay={<Tooltip>Import/Export Data</Tooltip>}
            >
              <DropdownButton
                className="toolbar-dropdown"
                size="lg"
                variant="outline-secondary"
                menuVariant="dark"
                title="Data"
                menuRole="Import/export .json data"
              >
                <Dropdown.Item as="button" onClick={() => { showPlaylistModal = true; this.setState(this.state); }}>Import from Playlist</Dropdown.Item>
                <Dropdown.Item
                  href={`data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(this.state))}`}
                  download="tierlist.json"
                  id="export-data"
                  onSelect={() => { toggleEditMode = false; this.setState(this.state); }}
                  onDragStart={e => e.preventDefault()}
                  style={{letterSpacing: '0px'}}
                >
                  Export as Json
                </Dropdown.Item>
                <Dropdown.ItemText id="import-data" style={{letterSpacing: '0px'}}>
                  <label style={{width: '100%', height: '100%'}} htmlFor="import_tierlist">Import from Json</label>
                  <br/>
                  <input style={{display: 'none'}}type="file" id="import_tierlist" name="import_tierlist" accept=".json" onChange={this.importFromJson}/>
                </Dropdown.ItemText>
              </DropdownButton>
            </OverlayTrigger>
          </div>
        </Container>

        <DragDropContext onDragEnd={this.onDragEnd}>
          <div id="tierlist-outer">
            <div id="tierlist-holder">
              <Droppable droppableId="tiers" direction="horizontal" type="column">
                {provided => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    key={refreshColumns}
                    id="tierlist-inner"
                  >
                    {this.state.columnOrder.map((columnId, index) => {
                      const column = this.state.columns[columnId];
                      return (
                        <div key={index} style={{display: 'flex', flexDirection: 'row'}}>
                          {toggleEditMode && (
                            <AddColumnButton
                              key={`add-btn-${index}`}
                              index={index}
                              addHandler={this.addNewCol}
                            />
                          )}
                          <InnerList
                            key={column.id}
                            column={column}
                            itemMap={this.state.items}
                            index={index}
                            updateHeader={this.updateColHeader}
                            deleteHandler={this.removeCol}
                            toggleEditMode={toggleEditMode}
                          />
                        </div>
                      );
                    })}
                    {toggleEditMode && (
                      <AddColumnButton
                        key={`add-btn-${this.state.columnOrder.length}`}
                        index={this.state.columnOrder.length}
                        addHandler={this.addNewCol}
                      />
                    )}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </div>

          <OverlayTrigger
            placement={'right'}
            overlay={<Tooltip>{showItemPool ? 'Hide' : 'Show'} Items</Tooltip>}
          >
            <Button id="itempool-toggle" type="button" onClick={() => this.showItems(!showItemPool)}>
              {showItemNotifBadge && (<div id="item-notif-badge"/>)}
              <Image onDragStart={e => e.preventDefault()} src={items_img} fluid alt='toggle music items' style={{width: "100%", height: "100%", filter: showItemPool ? "invert(100%)" : ""}}/>
            </Button>
          </OverlayTrigger>
          <Offcanvas id="itempool-overlay" show={showItemPool} onHide={() => this.showItems(false)} placement={'start'} scroll backdrop={false}>
            <Offcanvas.Header style={{justifyContent: "center", padding: "0.5rem 1rem 0 1rem"}}>
              <Offcanvas.Title><TrashCan /></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body style={{padding: 0}}>
              <h1 className="main-heading">Items</h1>
              <ItemPool items = {this.state.columns['item-pool'].itemIds.map(itemId => this.state.items[itemId])} />
            </Offcanvas.Body>
          </Offcanvas>
        </DragDropContext>

        <OverlayTrigger
          placement={'left'}
          overlay={<Tooltip>{showSearchbar ? 'Hide' : 'Show'} Search</Tooltip>}
        >
          <Button id="search-toggle" type="button" onClick={() => this.showSearch(!showSearchbar)}>
            <Image onDragStart={e => e.preventDefault()} src={search_img} fluid alt='toggle search bar' style={{width: "100%", height: "100%", filter: showSearchbar ? "invert(100%)" : ""}}/>
          </Button>
        </OverlayTrigger>
        <Offcanvas id="sidebar-overlay" show={showSearchbar} onHide={() => this.showSearch(false)} placement={'end'} scroll backdrop={false}>
          <Offcanvas.Header style={{justifyContent: "center", paddingBottom: "0.5rem"}}>
            <Offcanvas.Title><h1 className="main-heading">Search</h1></Offcanvas.Title>
            <RegionSelector refreshSidebar={refreshSidebar}/>
          </Offcanvas.Header>
          <Offcanvas.Body style={{padding: "0.125rem 0 0 0", overflowY: 'scroll'}}>
            <SidebarSearch refreshSidebar={refreshSidebar}/>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    );
  }
}

export default TierList