import React from 'react';
import '@atlaskit/css-reset';
import styled from 'styled-components';
import Column from './components/Column';
import ItemPool from './components/ItemPool';
import TrashCan from './components/TrashCan';
import { TierListContext } from './TierListContext';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import SidebarSearch from '../sidebar/SidebarSearch'
import './tierlist-styles.css';

const Container = styled.div`
  display: flex;
`;

class InnerList extends React.PureComponent {
  render() {
    const { column, itemMap, index, updateHeader, deleteHandler } = this.props;
    const items = column.itemIds.map(itemId => itemMap[itemId]);
    return <Column column={column} items={items} index={index} updateHeader={updateHeader} deleteHandler={deleteHandler}/>;
  }
}

let refreshItems = false;

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
  }

  // uh-oh this might be buggy
  importFromJson = e => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      const newState = JSON.parse(e.target.result);
      // check if the required keys exist and the item-pool and trash-can exists in column and has the correct format
      if(!('columnOrder' in newState && 'items' in newState && 'columns' in newState
      && 'item-pool' in newState.columns && 'trash-can' in newState.columns
      && 'id' in newState.columns['item-pool'] && newState.columns['item-pool'].id === 'item-pool'
      && 'itemIds' in newState.columns['item-pool'] && Array.isArray(newState.columns['item-pool'].itemIds)
      && 'id' in newState.columns['trash-can'] && newState.columns['trash-can'].id === 'trash-can')) {
        console.log('missing required information!');
        return;
      }

      // check if every column has the correct format
      let hasValidColumns = true;
      const requiredColumnKeys = ['id', 'title', 'color', 'itemIds'];
      Object.keys(newState.columns).forEach(function(key) {
        if(!hasValidColumns || key === 'item-pool' || key === 'trash-can') return;
        const columnKeys = Object.keys(newState.columns[key]);
        hasValidColumns = columnKeys.length === requiredColumnKeys.length && columnKeys.every(function(v, i) { return v === requiredColumnKeys[i]});
      });
      if(!hasValidColumns) {
        console.log('missing required column information!');
        return;
      }

      // check if every column in columnOrder exists in column (and no extra besides item-pool and trash-can)
      const columnOrder = newState.columnOrder;
      let allColumns = Object.keys(newState.columns);
      allColumns.splice(allColumns.indexOf('item-pool'), 1);
      allColumns.splice(allColumns.indexOf('trash-can'), 1);
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
        if(key === 'trash-can') return;
        itemIds = itemIds.concat(newState.columns[key].itemIds);
      });
      if(!(itemIds.length === allItems.length && itemIds.every(el => allItems.includes(el)))) {
        console.log('items and itemIds don\'t match!');
        return;
      }

      // success
      refreshItems = !refreshItems;
      this.setState(newState);
      console.log(this.state);
    };
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

    refreshItems = !refreshItems;
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
      columns: newColumns,
      columnOrder: newColumnOrder,
    };
    this.setState(newState);
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
      <div>
        <button
          type="button"
          onClick={() => {
            const ID = `column-${new Date().getTime()}`;
            const newColumnOrder = Array.from(this.state.columnOrder).concat(ID);
            const newState = {
              ...this.state,
              columnOrder: newColumnOrder
            };
            newState['columns'][ID] = {
              id: ID,
              title: 'NEW',
              color: '#1DB954',
              itemIds: [],
            };
            this.setState(newState);
          }}
        >
          Add new group
        </button>
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
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Container>
            <TrashCan />
            <Droppable droppableId="tiers" direction="horizontal" type="column">
              {provided => (
                <Container
                  {...provided.droppableProps}
                  ref={provided.innerRef}
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
                        deleteHandler={this.removeCol}
                      />
                    );
                  })}
                  {provided.placeholder}
                </Container>
              )}
            </Droppable>
          </Container>
          <Container>
            <ItemPool items = {this.state.columns['item-pool'].itemIds.map(itemId => this.state.items[itemId])} />
            <SidebarSearch refreshItems={refreshItems}/>
          </Container>
        </DragDropContext>
      </div>
    );
  }
}

export default TierList