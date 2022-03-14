import React, { useState } from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import _ from 'lodash';
import notrack from '../images/notrack.svg';
import cross from '../../tierlist/imgs/cross.svg'
import plus from '../../tierlist/imgs/plus.svg'
import { TierListContext } from '../../tierlist/TierListContext';

const TracksList = ({ tracks }) => {
  const [updater, setUpdater] = useState(false);
  return (
    <React.Fragment>
      {Object.keys(tracks).length > 0 && (
        <div className="tracks">
          {tracks.items.map((track, index) => {
            let id = track.id, type = 'track', songURL = track.external_urls.spotify, title = track.name, subtitle = track.artists.map((artist) => artist.name).join(', ');
            let imgURL = !_.isEmpty(track.album.images) ? track.album.images[0].url : null;
            return (
              <React.Fragment key={index}>
                <TierListContext.Consumer>
                  {({containsItem, addToItemPool, deleteFromItemPool}) => (
                    <Card className="search-card" style={{margin: "0.25rem 0", backgroundColor: containsItem(id, type) ? "black" : ""}}>
                      <Container>
                        <Row>
                          <Col xs="auto">
                            <a
                              className="card-img-link"
                              target="_blank"
                              href={songURL}
                              rel="noopener noreferrer"
                              style={{filter: containsItem(id, type) ? "brightness(50%)" : "brightness(100%)"}}
                              onDragStart={e => e.preventDefault()}
                            >
                              {imgURL !== null ? (
                                <Card.Img src={imgURL} alt="track album cover" />
                              ) : (
                                <Card.Img src={notrack} alt="default album cover" />
                              )}
                            </a>
                          </Col>
                          <Col>
                            <Card.Body>
                              <Card.Title style={{color: containsItem(id, type) ? "#555" : ""}}>{title}</Card.Title>
                              <Card.Text>
                                <small style={{color: containsItem(id, type) ?  "#555" : ""}}>{subtitle}</small>
                              </Card.Text>
                              <div>
                                {containsItem(id, type) ? (
                                  <button className="remove-buttons" onClick={() => {
                                    deleteFromItemPool(id, type);
                                    setUpdater(!updater);
                                  }}>
                                    <Image onDragStart={e => e.preventDefault()} src={cross} fluid alt='remove track' style={{width: "75%", height: "75%"}}/>
                                  </button>
                                ) : (
                                  <button className="item-buttons" onClick={() => {
                                    addToItemPool(id, type, songURL, imgURL, title, subtitle);
                                    setUpdater(!updater);
                                  }}>
                                    <Image onDragStart={e => e.preventDefault()} src={plus} fluid alt='add track' style={{width: "62.5%", height: "62.5%"}}/>
                                  </button>
                                )}
                              </div>
                            </Card.Body>
                          </Col>
                        </Row>
                      </Container>
                    </Card>
                  )}
                </TierListContext.Consumer>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export default TracksList;