import React from 'react'
import styled from 'styled-components';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Draggable } from 'react-beautiful-dnd'
import music from '../../sidebar/images/music.jpeg';

const ItemContent = styled.div`
  background-color: ${props => (props.isDragging ? '#535353' : 'none')};
  border-radius: 4px;
`;

const ItemSmall = styled.small`
  color: ${props => (props.isDragging ? 'white !important' : '#A4A4A4')};
`;

export default class Item extends React.Component {
    render() {
      return (
        <Draggable draggableId={this.props.item.id} index={this.props.index}>
          {(provided, snapshot) => (
            <ItemContent
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              isDragging={snapshot.isDragging}
            >
              <Card style={{ margin: 0 }}>
                <Container>
                  <Row>
                    <Col xs="auto">
                      <a
                        target="_blank"
                        href={this.props.item.songURL}
                        rel="noopener noreferrer"
                      >
                        {this.props.item.imgURL ? (
                          <Card.Img src={this.props.item.imgURL} alt="" />
                        ) : (
                          <img src={music} alt="" />
                        )}
                      </a>
                    </Col>
                    <Col>
                      <Card.Body>
                        <Card.Title>{this.props.item.title}</Card.Title>
                        {this.props.item.subtitle &&
                          <Card.Text>
                            <ItemSmall isDragging={snapshot.isDragging}>
                              {this.props.item.subtitle}
                            </ItemSmall>
                          </Card.Text>
                        }
                      </Card.Body>
                    </Col>
                  </Row>
                </Container>
              </Card>
            </ItemContent>
          )}
        </Draggable>
      );
    }
  }