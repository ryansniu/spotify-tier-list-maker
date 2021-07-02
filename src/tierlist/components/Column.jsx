import React from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Item from './Item';
import Title from './Title'

const Container = styled.div`
  margin: 8px;
  border: 1px solid #1DB954;
  background-color: none;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
`;

const ItemList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => props.isDraggingOver ? 'lightgrey' : 'none'};
  flex-grow: 1;
  min-width: 8rem;
  min-height: 25rem;
`;

class InnerList extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.items === this.props.items) {
      return false;
    }
    return true;
  }
  render() {
    return this.props.items.map((item, index) => (
      <Item key={item.id} item={item} index={index} />
    ));
  }
}

export default class Column extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.column.id} index={this.props.index}>
        {provided => (
          <Container {...provided.draggableProps} ref={provided.innerRef}>
            <div {...provided.dragHandleProps}>
              <Title colData={this.props.column} updateHeader={this.props.updateHeader} deleteHandler={this.props.deleteHandler} />
            </div>
            <Droppable droppableId={this.props.column.id} type="item">
              {(provided, snapshot) => (
                <ItemList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  <InnerList items={this.props.items} />
                  {provided.placeholder}
                </ItemList>
              )}
            </Droppable>
          </Container>
        )}
      </Draggable>
    );
  }
}