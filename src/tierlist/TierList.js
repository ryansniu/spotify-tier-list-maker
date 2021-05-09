import React from 'react';
import '@atlaskit/css-reset';
import styled from 'styled-components';
import Column from './components/Column'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import initialData from './InitialData';
import './tierlist-styles.css';

const Container = styled.div`
  display: flex;
`;

class InnerList extends React.PureComponent {
  render() {
    const { column, taskMap, index, updateHeader } = this.props;
    const tasks = column.taskIds.map(taskId => taskMap[taskId]);
    return <Column column={column} tasks={tasks} index={index} updateHeader={updateHeader} />;
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
      const newTaskIds = Array.from(home.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newHome = {
        ...home,
        taskIds: newTaskIds
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
    const homeTaskIds = Array.from(home.taskIds);
    homeTaskIds.splice(source.index, 1);
    const newHome = {
      ...home,
      taskIds: homeTaskIds,
    };

    const foreignTaskIds = Array.from(foreign.taskIds);
    foreignTaskIds.splice(destination.index, 0, draggableId);
    const newForeign = {
      ...foreign,
      taskIds: foreignTaskIds,
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
                      taskMap={this.state.tasks}
                      index={index}
                      updateHeader={this.updateColHeader}
                    />
                  );
                })}
                {provided.placeholder}
              </Container>
            )}
          </Droppable>
      </DragDropContext>
    );
  }
}

export default TierList