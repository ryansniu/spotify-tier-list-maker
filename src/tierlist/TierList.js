import React from 'react';
import '@atlaskit/css-reset';
import styled from 'styled-components';
import initialData from './InitialData';
import Column from './components/Column';
import ItemPool from './components/ItemPool';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
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
  state = initialData;

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
        object[key] = oldColumns[key]
      }
      return object
    }, {})

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
        <DragDropContext onDragEnd={this.onDragEnd}>
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
          <Container>
            <ItemPool items ={this.state.columns['item-pool'].itemIds.map(itemId => this.state.items[itemId])} />
          </Container>
        </DragDropContext>
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
      </div>
    );
  }
}

export default TierList