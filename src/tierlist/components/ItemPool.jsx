import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Item from './Item';

const Container = styled.div`
  margin: 0 auto;
  background-color: #121212;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  width: 19.43rem;
  height: calc(100vh - 11.375rem);
  overflow-y: scroll;
`;

const ItemList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => props.isDraggingOver ? '#2a2a2a' : 'none'};
  flex-grow: 1;
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

export default class ItemPool extends React.Component {
  render() {
    return (
      <Container>
        <Droppable droppableId="item-pool" type="item">
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
    );
  }
}