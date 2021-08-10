import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';

const Container = styled.div`
  margin: 0.5rem auto;
  border: 1px solid ${props => props.isDraggingOver ? 'red' : 'darkred'};
  background-color: none;
  border-radius: 2px;
  width: 19.43rem;
  height: 4.75rem;
  max-height: 4.75rem;
  overflow-y: hidden;
`;

const ItemList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => props.isDraggingOver ? '#530000' : 'none'};
  height: 100%;
`;

const TrashHeading = styled.h1`
  color: ${props => props.isDraggingOver ? 'red' : '#BB0000'};
  position: absolute;
  left: 0;
  right: 0;
  top: 12.5%;
`;

export default class TrashCan extends React.Component {
  render() {
    return (
      <Droppable droppableId="trash-can" type="item">
        {(provided, snapshot) => (
          <div style={{position: "relative"}}>
            <TrashHeading className="main-heading" isDraggingOver={snapshot.isDraggingOver}>🗑️Trash</TrashHeading>
            <Container isDraggingOver={snapshot.isDraggingOver}>
              <ItemList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {provided.placeholder}
              </ItemList>
            </Container>
          </div>
        )}
      </Droppable>
    );
  }
}