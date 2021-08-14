import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { Image } from 'react-bootstrap';
import plus from '../../tierlist/imgs/plus.svg'

const Container = styled.div`
  background-color: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 22rem;
`;

export default class AddColumnButton extends React.Component {
  render() {
    return (
      <Draggable draggableId={`add-btn-${this.props.index}`} index={this.props.index} isDragDisabled={true}> 
        {(provided) => (
          <Container
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <button className="column-add-button" onClick={() => this.props.addHandler(this.props.index)}>
              <Image onDragStart={e => e.preventDefault()} src={plus} fluid alt='add column' style={{width: "62.5%", height: "62.5%"}}/>
            </button>
          </Container>
        )}
      </Draggable>
    );
  }
}