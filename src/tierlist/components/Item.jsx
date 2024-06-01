import React from 'react'
import styled from 'styled-components';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Draggable } from 'react-beautiful-dnd'
import notrack from '../../sidebar/images/notrack.svg';
import noalbum from '../../sidebar/images/noalbum.svg';
import noartist from '../../sidebar/images/noartist.svg';

import AudioPlayer from '../../tierlist/components/AudioPlayer';
import { AudioContext } from '../AudioProvider';

const ItemContent = styled.div`
  background-color: ${props => (props.isDragging ? '#5a5a5a' : 'none')};
  border-radius: 4px;
  width: 17.25rem;
  max-width: 17.25rem;
  &:hover .card{
    background: #2a2a2a;
  }
  &:hover .card small{
    color: white;
  }
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
                          <div style={{display: 'flex', alignItems: 'start' }}>
                            {this.props.item.isExplicit && <div style={{userSelect: 'none', transform: 'translateY(3px)', marginRight: '0.2rem', fontSize: '0.5rem', textAlign: 'center', display: 'inline-block', borderRadius: '2px', backgroundColor: '#AAAAAA', color: '#121212', minWidth: '0.75rem', height: '0.75rem'}}>E</div>}
                            <Card.Text>
                              <ItemSmall isDragging={snapshot.isDragging}>
                                {this.props.item.subtitle}
                              </ItemSmall>
                            </Card.Text>
                          </div>
                        }
                      </Card.Body>
                    </Col>
                  </Row>
                </Container>
              </Card>
              <div className="audio-player" style={{ display: 'flex', flexDirection: 'column', gap: '6px', transform: 'translateY(2px)' }}>
                { this.props.item.audioURL &&
                <AudioContext.Consumer>
                  {({getCurrentAudioId, getCurrentAudioSrc, setCurrentAudio}) => (
                    <AudioPlayer key={getCurrentAudioId()} id={this.props.item.id} src={this.props.item.audioURL} getCurrentAudioId={getCurrentAudioId} getCurrentAudioSrc={getCurrentAudioSrc} setCurrentAudio={setCurrentAudio}/> 
                  )}
                </AudioContext.Consumer>
                }
              </div>
            </ItemContent>
          )}
        </Draggable>
      );
    }
  }