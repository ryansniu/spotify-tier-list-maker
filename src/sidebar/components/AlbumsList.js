import React, { useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import _ from 'lodash';
import music from '../images/music.jpeg';
import { TierListContext } from '../../tierlist/TierListContext';

const AlbumsList = ({ albums }) => {
  const [updater, setUpdater] = useState(false);
  return (
    <React.Fragment>
      {Object.keys(albums).length > 0 && (
        <div className="albums">
          {albums.items.map((album, index) => {
            let id = album.id, type = 'album', songURL = album.external_urls.spotify, title = album.name, subtitle = album.artists.map((artist) => artist.name).join(', ');
            let imgURL = !_.isEmpty(album.images) ? album.images[0].url : null;
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
                              {!_.isEmpty(album.images) ? (
                                <Card.Img src={album.images[0].url} alt="" />
                              ) : (
                                <img src={music} alt="" />
                              )}
                            </a>
                          </Col>
                          <Col>
                            <Card.Body>
                              <Card.Title style={{margin: '0'}}>{title}</Card.Title>
                              <Card.Text>
                                <small>{subtitle}</small>
                              </Card.Text>
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

export default AlbumsList;