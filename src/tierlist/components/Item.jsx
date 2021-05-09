import React from 'react'
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd'

const ItemContent = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
  color: black;
`;

export default class Item extends React.Component {
    render() {
      return (
        <Draggable draggableId={this.props.task.id} index={this.props.index}>
          {(provided, snapshot) => (
            <ItemContent
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              isDragging={snapshot.isDragging}
            >
              {this.props.task.content}
            </ItemContent>
          )}
        </Draggable>
      );
    }
  }