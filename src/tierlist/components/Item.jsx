import React from 'react'
import styled from 'styled-components';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Draggable } from 'react-beautiful-dnd'
import notrack from '../../sidebar/images/notrack.svg';
import noalbum from '../../sidebar/images/noalbum.svg';
import noartist from '../../sidebar/images/noartist.svg';

const ItemContent = styled.div`
  background-color: ${props => (props.isDragging ? '#5a5a5a' : 'none')};
  border-radius: 4px;
  width: 17.25rem;
  max-width: 17.25rem;
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
                        className="card-img-link"
                        target="_blank"
                        href={this.props.item.songURL}
                        rel="noopener noreferrer"
                        onDragStart={e => e.preventDefault()}
                      >
                        {this.props.item.imgURL ? (
                          <Card.Img src={this.props.item.imgURL} alt="" />
                        ) : (
                          <Card.Img src={this.props.item.type === "track" ? notrack : this.props.item.type === "album" ? noalbum : noartist } alt="" />
                        )}
                      </a>
                    </Col>
                    <Col>
                      <Card.Body>
                        <Card.Title>{this.props.item.title}</Card.Title>
                        {this.props.item.subtitle &&
                          <Card.Text>
                            <ItemSmall isDragging={snapshot.isDragging}>
                              {this.props.item.isExplicit && <div style={{transform: 'translateY(-1.5px)', fontSize: '0.5rem', textAlign: 'center', display: 'inline-block', borderRadius: '2px', backgroundColor: '#AAAAAA', color: '#121212', width: '0.75rem', height: '0.75rem'}}>E</div>}
                              {this.props.item.isExplicit && ' '}
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