import React from 'react';
import '@atlaskit/css-reset';
import styled from 'styled-components';
import Column from './components/Column';
import ItemPool from './components/ItemPool';
import TrashCan from './components/TrashCan';
import TrashCan2 from './components/TrashCan2';
import { TierListContext } from './TierListContext';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Offcanvas } from 'react-bootstrap';
import { toJpeg, toPng, toSvg } from 'html-to-image';
import SidebarSearch from '../sidebar/SidebarSearch'
import Header from '../sidebar/components/Header';
import './tierlist-styles.css';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const presetColors = ["#F63E02", "#F5B700", "#1DB954", "#4D9DE0", "#360568", "#DC3CA0"];

class InnerList extends React.PureComponent {
  render() {
    const { column, itemMap, index, updateHeader } = this.props;
    const items = column.itemIds.map(itemId => itemMap[itemId]);
    return <Column column={column} items={items} index={index} updateHeader={updateHeader} presetColors={presetColors} />;
  }
}

let refreshSidebar = false;
let refreshColumns = false;
let showSearchbar = false;
let showItemPool = false;

const saveFileTypes = ["jpeg", "png", "svg"];

class TierList extends React.Component {
  static contextType = TierListContext;
  state = this.context.data;

  componentDidMount() {
    this.context.containsItem = (id, type) => {
      if(id in this.state.items) {
        return this.state.items[id]['type'] === type;
      }
      return false;
    };

    this.context.addToItemPool = (id, type, songURL, imgURL, title, subtitle) => {
      if(this.context.containsItem(id, type)) return; // do nothing
      const newItems = {
        ...this.state.items,
        [id]: {
          id: id,
          type: type,
          songURL: songURL,
          imgURL: imgURL,
          title: title,
          subtitle: subtitle
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
      console.log(newState);
      refreshColumns = !refreshColumns;
      this.setState(newState);
    }
  }

  // absolutely cursed
  importFromJson = e => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      const newState = JSON.parse(e.target.result);
      // check if the required keys exist and the item-pool exists in column and has the correct format
      if(!('columnOrder' in newState && 'items' in newState && 'columns' in newState && 'item-pool' in newState.columns
      && 'id' in newState.columns['item-pool'] && newState.columns['item-pool'].id === 'item-pool'
      && 'itemIds' in newState.columns['item-pool'] && Array.isArray(newState.columns['item-pool'].itemIds))) {
        console.log('missing item pool!');
        return;
      }

      // check if every column has the correct format
      let hasValidColumns = true;
      const requiredColumnKeys = ['id', 'title', 'color', 'itemIds'];
      Object.keys(newState.columns).forEach(function(key) {
        if(!hasValidColumns || key === 'item-pool') return;
        const columnKeys = Object.keys(newState.columns[key]);
        hasValidColumns = columnKeys.length === requiredColumnKeys.length && columnKeys.every(function(v, i) { return v === requiredColumnKeys[i]});
      });
      if(!hasValidColumns) {
        console.log('missing required column information!');
        return;
      }

      // check if every column in columnOrder exists in column (and no extra besides item-pool)
      const columnOrder = newState.columnOrder;
      let allColumns = Object.keys(newState.columns);
      allColumns.splice(allColumns.indexOf('item-pool'), 1);
      if(!(columnOrder.length === allColumns.length && columnOrder.every(el => allColumns.includes(el)))) {
        console.log('columnOrder and columns don\'t match!');
        return;
      }

      // check if every item in items has the correct format
      let hasValidItems = true;
      const requiredItemKeys = ['id', 'type', 'songURL', 'imgURL', 'title', 'subtitle'];
      Object.keys(newState.items).forEach(function(key) {
        if(!hasValidItems) return;
        const itemKeys = Object.keys(newState.items[key]);
        hasValidItems = itemKeys.length === requiredItemKeys.length && itemKeys.every(function(v, i) { return v === requiredItemKeys[i]});
      });
      if(!hasValidItems) {
        console.log('missing required item information!');
        return;
      }

      // check if every itemIDs exists in items (and no extra)
      const allItems = Object.keys(newState.items);
      let itemIds = [];
      Object.keys(newState.columns).forEach(function(key) {
        itemIds = itemIds.concat(newState.columns[key].itemIds);
      });
      if(!(itemIds.length === allItems.length && itemIds.every(el => allItems.includes(el)))) {
        console.log('items and itemIds don\'t match!');
        return;
      }

      // success
      refreshSidebar = !refreshSidebar;
      this.setState(newState);
      console.log(this.state);
    };
  }

  saveAsIMG (fileType) {
    const saveIMG = (dataUrl) => {
      const link = document.createElement('a');
      link.download = 'tierlist.'.concat(fileType);
      link.href = dataUrl;
      link.click();
    }

    if(fileType === "jpeg") {
      toJpeg(document.getElementById('tierlist_all'), {backgroundColor: '#121212', pixelRatio: 2})
        .then(saveIMG).catch((err) => { console.log(err); });
    }
    if(fileType === "png") {
      toPng(document.getElementById('tierlist_all'), {backgroundColor: '#121212', pixelRatio: 2})
        .then(saveIMG).catch((err) => { console.log(err); });
    }
    if(fileType === "svg") {
      toSvg(document.getElementById('tierlist_all'), {backgroundColor: '#121212'})
        .then(saveIMG).catch((err) => { console.log(err); });
    }
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

  removeCol = (id) => {
    const oldItems = this.state.items;
    const newItems = Object.keys(oldItems).reduce((object, key) => {
      if(!this.state.columns[id].itemIds.includes(key)) {
        object[key] = oldItems[key];
      }
      return object;
    }, {});

    const newColumnOrder = Array.from(this.state.columnOrder);
    newColumnOrder.splice(newColumnOrder.indexOf(id), 1);

    const oldColumns = this.state.columns;
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

  onDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    if (destination.droppableId === 'trash-can-2') {
      this.removeCol(draggableId);
      return;
    }

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

  addNewGroup = () => {
    const ID = `column-${new Date().getTime()}`;
    const newColumnOrder = Array.from(this.state.columnOrder).concat(ID);
    const newState = {
      ...this.state,
      columnOrder: newColumnOrder
    };
    newState['columns'][ID] = {
      id: ID,
      title: 'NEW',
      color: 'gray',
      itemIds: [],
    };
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
    refreshSidebar = !refreshSidebar;
    this.setState(newState);
  }

  resetAllColumns = () => {
    this.resetAllItems();
    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
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
        }
      },
      columnOrder: ['column-1', 'column-2', 'column-3','column-4']
    }
    refreshColumns = !refreshColumns;
    this.setState(newState);
  }

  resetTierList = () => {
    this.resetAllItems();
    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
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
    
    refreshColumns = !refreshColumns;
    refreshSidebar = !refreshSidebar;
    this.setState(newState);
  }

  showSearch = (show) => {
    showSearchbar = show;
    this.setState(this.state);
  }

  showItems = (show) => {
    showItemPool = show;
    this.setState(this.state);
  }

  render() {
    return (
      <div>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Container>
            <button type="button" onClick={() => this.showItems(true)}>Items</button>
            <button type="button" onClick={this.addNewGroup}>Add new group</button>
            <button type="button" onClick={this.resetAllItems}>Reset All Items</button>
            <button type="button" onClick={this.removeAllItems}>Remove All Items</button>
            <button type="button" onClick={this.resetAllColumns}>Reset All Columns</button>
            <button type="button" onClick={this.resetTierList}>Reset TierList</button>
            <a
              href={`data:text/json;charset=utf-8,${encodeURIComponent(
                JSON.stringify(this.state)
              )}`}
              download="tierlist.json"
            >
              {`Export as Json`}
            </a>
            <div>
              <label htmlFor="import_tierlist">Import from Json</label>
              <input type="file" id="import_tierlist" name="import_tierlist" accept=".json" onChange={this.importFromJson}/>
            </div>
            {saveFileTypes.map((fileType) => (
              <button key={fileType} type="button" onClick={() => this.saveAsIMG(fileType)}>Save as .{fileType}</button>
            ))}
            <button type="button" onClick={() => this.showSearch(true)}>Search</button>
          </Container>

          <Container style={{overflow: 'scroll'}}>
            <div id="tierlist_holder">
              <Droppable  droppableId="tiers" direction="horizontal" type="column">
                {provided => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    key={refreshColumns}
                    id="tierlist_all"
                  >
                    {this.state.columnOrder.map((columnId, index) => {
                      const column = this.state.columns[columnId];
                      return (
                        <InnerList
                          key={column.id}
                          column={column}
                          itemMap={this.state.items}
                          index={index}
                          updateHeader={this.updateColHeader}
                        />
                      );
                    })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </Container>

          <Offcanvas id="itempool-overlay" show={showItemPool} onHide={() => this.showItems(false)} placement={'start'} scroll backdrop={false}>
            <Offcanvas.Header closeButton closeVariant='white' style={{paddingBottom: "0.5rem"}}>
              <Offcanvas.Title><h1 className="main-heading">Items</h1></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body style={{padding: "0.5rem 0 0 0", overflowY: 'scroll'}}>
              <ItemPool items = {this.state.columns['item-pool'].itemIds.map(itemId => this.state.items[itemId])} />
              <TrashCan />
              <TrashCan2 />
            </Offcanvas.Body>
          </Offcanvas>

          <Offcanvas id="sidebar-overlay" show={showSearchbar} onHide={() => this.showSearch(false)} placement={'end'} scroll backdrop={false}>
            <Offcanvas.Header closeButton closeVariant='white' style={{paddingBottom: "0.5rem"}}>
              <Offcanvas.Title><Header /></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body style={{padding: "0.5rem 0 0 0", overflowY: 'scroll'}}>
              <SidebarSearch refreshSidebar={refreshSidebar}/>
            </Offcanvas.Body>
          </Offcanvas>
        </DragDropContext>
      </div>
    );
  }
}

export default TierList