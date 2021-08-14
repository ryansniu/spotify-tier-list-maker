import React, { useState } from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import _ from 'lodash';
import noalbum from '../images/noalbum.svg';
import cross from '../../tierlist/imgs/cross.svg'
import plus from '../../tierlist/imgs/plus.svg'
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
                              {!_.isEmpty(album.images) ? (
                                <Card.Img src={album.images[0].url} alt="album cover" />
                              ) : (
                                <Card.Img src={noalbum} alt="default album cover" />
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
                                    <Image onDragStart={e => e.preventDefault()} src={cross} fluid alt='remove album' style={{width: "75%", height: "75%"}}/>
                                  </button>
                                ) : (
                                  <button className="item-buttons" onClick={() => {
                                    addToItemPool(id, type, songURL, imgURL, title, subtitle);
                                    setUpdater(!updater);
                                  }}>
                                    <Image onDragStart={e => e.preventDefault()} src={plus} fluid alt='add album' style={{width: "62.5%", height: "62.5%"}}/>
                                  </button>
                                )}
                              </div>
                            </Card.Body>
                          </Col>
                          <Col xs="auto">
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