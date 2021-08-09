import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';

const Container = styled.div`
  margin: 0.5rem auto;
  border: 1px solid #1DB954;
  background-color: none;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  width: 18.25rem;
`;

const ItemList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => props.isDraggingOver ? 'darkred' : 'none'};
  flex-grow: 1;
  height: 4.75rem;
`;

export default class TrashCan extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Droppable droppableId="trash-can" type="item">
            {(provided, snapshot) => (
                <ItemList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  <h1 className="main-heading">🗑️Trash</h1>
                  {provided.placeholder}
                </ItemList>
            )}
          </Droppable>
        </Container>
      </div>
    );
  }
}