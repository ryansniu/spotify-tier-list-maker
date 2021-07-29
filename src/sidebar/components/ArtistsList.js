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
                    <Card style={{maxWidth: "22rem", width: "22rem", marginLeft: "0.5rem", marginRight: "0.5rem"}}>
                      <Container>
                        <Row>
                          <Col xs="auto">
                            <a
                              target="_blank"
                              href={songURL}
                              rel="noopener noreferrer"
                            >
                              {!_.isEmpty(artist.images) ? (
                                <Card.Img src={artist.images[0].url} alt="" />
                              ) : (
                                <img src={music} alt="" />
                              )}
                            </a>
                          </Col>
                          <Col>
                            <Card.Body>
                              <Card.Title style={{margin: '0'}}>{title}</Card.Title>
                            </Card.Body>
                          </Col>
                          <Col xs="auto">
                            <div>
                              {containsItem(id, type) ? (
                                <button className="remove-buttons" onClick={() => {
                                  deleteFromItemPool(id, type);
                                  setUpdater(!updater);
                                }}>x</button>
                              ) : (
                                <button className="item-buttons" onClick={() => {
                                  addToItemPool(id, type, songURL, imgURL, title, subtitle);
                                  setUpdater(!updater);
                                }}>+</button>
                              )}
                              <button className="item-buttons">v</button>
                            </div>
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