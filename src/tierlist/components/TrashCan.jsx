import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';

const Container = styled.div`
  margin: 8px;
  border: 1px solid #1DB954;
  background-color: none;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  min-width: 21.2rem;
`;

const ItemList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => props.isDraggingOver ? 'pink' : 'none'};
  flex-grow: 1;
  height: 5rem;
`;

export default class TrashCan extends React.Component {
  render() {
    return (
      <div>
      <h1 className="main-heading">Trash Can</h1>
        <Container>
          <Droppable droppableId="trash-can" type="item">
            {(provided, snapshot) => (
                <ItemList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                />
            )}
          </Droppable>
        </Container>
      </div>
    );
  }
}