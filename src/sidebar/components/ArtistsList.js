import React, { useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import _ from 'lodash';
import music from '../images/music.jpeg';
import { TierListContext } from '../../tierlist/TierListContext';

const ArtistsList = ({ artists }) => {
  const [updater, setUpdater] = useState(false);
  return (
    <React.Fragment>
      {Object.keys(artists).length > 0 && (
        <div className="artists">
          {artists.items.map((artist, index) => {
            let id = artist.id, type = 'artist', songURL = artist.external_urls.spotify, title = artist.name, subtitle = null;
            let imgURL = !_.isEmpty(artist.images) ? artist.images[0].url : null;
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
                              {!_.isEmpty(artist.images) ? (
                                <Card.Img src={artist.images[0].url} alt="artist" />
                              ) : (
                                <img src={music} alt="default artist" />
                              )}
                            </a>
                          </Col>
                          <Col>
                            <Card.Body>
                              <Card.Title style={{color: containsItem(id, type) ? "#555" : ""}}>{title}</Card.Title>
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

export default ArtistsList;