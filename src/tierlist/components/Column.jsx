import React from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { toColor } from "react-color-palette";
import Item from './Item';
import Title from './Title'

const Container = styled.div`
  border: 4px solid black;
  margin: 8px;
  background-color: none;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

const ItemList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => props.isDraggingOver ? props.bgColor : 'none'};
  flex-grow: 1;
  min-width: 18.25rem;
  min-height: 20rem;
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
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    }
  }

  getBodyColor(color) {
    let newColor = toColor("hex", color).hsv;
    newColor.v = newColor.v / 2;
    newColor.a = 0.5;
    return toColor("hsv", newColor).hex;
  }

  render() {
    return (
      <Draggable draggableId={this.props.column.id} index={this.props.index} isDragDisabled={this.state.isEditing}>
        {provided => (
          <Container {...provided.draggableProps} ref={provided.innerRef}>
            <div {...provided.dragHandleProps}>
              <Title
                colData={this.props.column}
                updateHeader={this.props.updateHeader}
                deleteHandler={this.props.deleteHandler}
                setEditing={(e) => this.setState({ isEditing: e })}
              />
            </div>
            <Droppable droppableId={this.props.column.id} type="item">
              {(provided, snapshot) => (
                <ItemList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                  bgColor={this.getBodyColor(this.props.column.color)}
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