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

class TierList extends React.Component {
  static contextType = TierListContext;
  state = this.context.data;

  componentDidMount() {
    this.context.containsItem = (id) => {
      return id in this.state.items;
    };
    this.context.addToItemPool = (id, songURL, imgURL, title, subtitle) => {
      if(id in this.state.items) return; // do nothing
      const newItems = {
        ...this.state.items,
        [id]: {
          id: id,
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
            <SidebarSearch />
          </Container>
        </DragDropContext>
      </div>
    );
  }
}

export default TierList