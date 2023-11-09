import React, { useState } from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import _ from 'lodash';
import noalbum from '../images/noalbum.svg';
import cross from '../../tierlist/imgs/cross.svg'
import plus from '../../tierlist/imgs/plus.svg'
import cross_all from '../../tierlist/imgs/cross-all.svg'
import plus_all from '../../tierlist/imgs/plus-all.svg'
import { TierListContext } from '../../tierlist/TierListContext';
import LZString from 'lz-string';

const AlbumsList = ({ albums, getInnerItems }) => {
  const [updater, setUpdater] = useState(false);

  const getTracksFromAlbum = async (id, imgURL) => {
    let cacheKey = `album_${id}`;
    if(sessionStorage.getItem(cacheKey) === null) {
      let albumContents = [];
      let result = await getInnerItems(id, 'album', 'track');
      if(result === undefined || result[0] === undefined) return null;
      for(let i = 0; i < result.length; i++) {
        let item = result[i];
        albumContents.push({
          id: item.id,
          type: 'track',
          songURL: item.external_urls.spotify,
          imgURL: imgURL,
          title: item.name,
          subtitle: item.artists.map((artist) => artist.name).join(', ')
        })
      }
      sessionStorage.setItem(cacheKey, LZString.compress(JSON.stringify(albumContents)));
    }
    return JSON.parse(LZString.decompress(sessionStorage.getItem(cacheKey)));
  }

  return (
    <React.Fragment>
      {Object.keys(albums).length > 0 && (
        <div className="albums">
          {albums.items.map((album, index) => {
            let id = album.id, type = 'album', songURL = album.external_urls.spotify, title = album.name, subtitle = 'Album • ' + album.artists.map((artist) => artist.name).join(', ');
            let imgURL = !_.isEmpty(album.images) ? album.images[0].url : null;
            return (
              <React.Fragment key={index}>
                <TierListContext.Consumer>
                  {({containsItem, addToItemPool, deleteFromItemPool, addManyToItemPool, deleteManyFromItemPool}) => (
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
                                    <Image onDragStart={e => e.preventDefault()} src={plus} fluid alt='add album' style={{width: "65%", height: "65%"}}/>
                                  </button>
                                )}

                                <button className="item-buttons" style={{right: "2.5rem", transitionDelay: "0.025s"}} onClick={async () => {
                                  const albumContents = await getTracksFromAlbum(id, imgURL);
                                  if(albumContents) {
                                    addManyToItemPool(albumContents, 'track');
                                    setUpdater(!updater);
                                  }
                                }}>
                                  <Image onDragStart={e => e.preventDefault()} src={plus_all} fluid alt='add all tracks in album' style={{width: "60%", height: "60%"}}/>
                                </button>

                                <button className="remove-buttons" style={{right: "4.5rem", transitionDelay: "0.050s"}} onClick={async () => {
                                  const albumContents = await getTracksFromAlbum(id, imgURL);
                                  if(albumContents) {
                                    deleteManyFromItemPool(albumContents, 'track');
                                    setUpdater(!updater);
                                  }
                                }}>
                                  <Image onDragStart={e => e.preventDefault()} src={cross_all} fluid alt='remove all tracks in album' style={{width: "60%", height: "60%"}}/>
                                </button>
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