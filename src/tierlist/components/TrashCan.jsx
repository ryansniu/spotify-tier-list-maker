import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import { Image } from 'react-bootstrap';
import trash from '../imgs/trash-can.svg'

const Container = styled.div`
  margin: 0.5rem auto;
  border: 1px solid ${props => props.isDraggingOver ? 'red' : 'darkred'};
  transition: border 0.2s ease;
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
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const defaultTrashColor = "invert(8%) sepia(98%) saturate(5962%) hue-rotate(2deg) brightness(93%) contrast(110%)";
const highlightTrashColor = "invert(11%) sepia(77%) saturate(7498%) hue-rotate(6deg) brightness(105%) contrast(118%)";

export default class TrashCan extends React.Component {
  render() {
    return (
      <Droppable droppableId="trash-can" type="item">
        {(provided, snapshot) => (
          <div style={{position: "relative"}}>
            <TrashHeading className="main-heading" isDraggingOver={snapshot.isDraggingOver}>
             <Image src={trash} fluid alt='trash can' style={{width: "4rem", transition: "filter 0.2s ease", filter: snapshot.isDraggingOver ? highlightTrashColor : defaultTrashColor}}/>
            </TrashHeading>
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