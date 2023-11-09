import React from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { toColor } from "react-color-palette";
import Item from './Item';
import Title from './Title'

const Container = styled.div`
  border: 4px solid ${props => props.isDragDisabled ? props.bdColorDark : props.bdColor};
  margin: 8px;
  background-color: none;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
`;

const ItemList = styled.div`
  padding: 8px;
  background-color: ${props => props.isDraggingOver || props.isDragging ? props.bgColor : 'none'};
  transition: background-color 0.2s ease;
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
      isEditing: false,
      borderColor: this.props.column.color
    }
  }

  getDarkBorderColor(color) {
    let newColor = toColor("hex", color).hsv;
    newColor.a = 0.77;
    return toColor("hsv", newColor).hex;
  }

  getBodyColor(color) {
    let newColor = toColor("hex", color).hsv;
    newColor.v = newColor.v / 2;
    newColor.a = 0.64;
    return toColor("hsv", newColor).hex;
  }

  render() {
    return (
      <Draggable draggableId={this.props.column.id} index={this.props.index} isDragDisabled={this.state.isEditing || this.props.toggleEditMode}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            ref={provided.innerRef}
            isDragDisabled={this.props.toggleEditMode}
            bdColor={this.state.borderColor}
            bdColorDark={this.getDarkBorderColor(this.state.borderColor)}
          >
            <div {...provided.dragHandleProps}>
              <Title
                colData={this.props.column}
                updateHeader={this.props.updateHeader}
                deleteHandler={this.props.deleteHandler}
                showDeleteButton={this.props.toggleEditMode}
                presetColors={this.props.presetColors}
                setEditing={(e) => this.setState({ isEditing: e })}
                setBorderColor={(color) => this.setState({ borderColor: color })}
              />
            </div>
            <Droppable droppableId={this.props.column.id} type="item">
              {(provided, snapshot2) => (
                <ItemList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDragging={snapshot.isDragging}
                  isDraggingOver={snapshot2.isDraggingOver}
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