import React from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Item from './Item';
import Title from './Title'

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  background-color: none;
  border-radius: 2px;
  width: 220px;

  display: flex;
  flex-direction: column;
`;

const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => props.isDraggingOver ? 'lightgrey' : 'none'};
  flex-grow: 1;
  min-height: 400px;
`;

class InnerList extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.tasks === this.props.tasks) {
      return false;
    }
    return true;
  }
  render() {
    return this.props.tasks.map((task, index) => (
      <Item key={task.id} task={task} index={index} />
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
              <Title colData={this.props.column} updateHeader={this.props.updateHeader} />
            </div>
            <Droppable droppableId={this.props.column.id} type="task">
              {(provided, snapshot) => (
                <TaskList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  <InnerList tasks={this.props.tasks} />
                  {provided.placeholder}
                </TaskList>
              )}
            </Droppable>
          </Container>
        )}
      </Draggable>
    );
  }
}