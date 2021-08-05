import React, { useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import _ from 'lodash';
import music from '../images/music.jpeg';
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
                              target="_blank"
                              href={songURL}
                              rel="noopener noreferrer"
                              style={{filter: containsItem(id, type) ? "brightness(50%)" : "brightness(100%)"}}
                            >
                              {!_.isEmpty(track.album.images) ? (
                                <Card.Img src={imgURL} alt="track album cover" />
                              ) : (
                                <img src={music} alt="default album cover" />
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
                                  }}>×</button>
                                ) : (
                                  <button className="item-buttons" onClick={() => {
                                    addToItemPool(id, type, songURL, imgURL, title, subtitle);
                                    setUpdater(!updater);
                                  }}>+</button>
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