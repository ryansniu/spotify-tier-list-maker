import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Item from './Item';

const Container = styled.div`
  margin: 8px;
  border: 1px solid #1DB954;
  background-color: none;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  min-width: 18.375rem;
`;

const ItemList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => props.isDraggingOver ? 'lightgrey' : 'none'};
  flex-grow: 1;
  min-height: 16rem;
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
      <div>
        <h1 className="main-heading">Items</h1>
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
      </div>
    );
  }
}