import React, { useState } from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import _ from 'lodash';
import noartist from '../images/noartist.svg';
import cross from '../../tierlist/imgs/cross.svg'
import plus from '../../tierlist/imgs/plus.svg'
import cross_all from '../../tierlist/imgs/cross-all.svg'
import plus_all from '../../tierlist/imgs/plus-all.svg'
import { TierListContext } from '../../tierlist/TierListContext';
import LZString from 'lz-string';

const ArtistsList = ({ artists, getInnerItems }) => {
  const [updater, setUpdater] = useState(false);

  const getAlbumsFromArtist = async (id) => {
    let cacheKey = `artist_${id}_${sessionStorage.getItem('regionLocked')}`;
    if(sessionStorage.getItem(cacheKey) === null) {
      let artistContents = [];
      let result = await getInnerItems(id, 'artist', 'album');
      if(result === undefined || result[0] === undefined) return null;
      for(let i = 0; i < result.length; i++) {
        let item = result[i];
        artistContents.push({
          id: item.id,
          type: 'album',
          songURL: item.external_urls.spotify,
          imgURL: !_.isEmpty(item.images) ? item.images[0].url : null,
          title: item.name,
          subtitle: item.artists.map((artist) => artist.name).join(', ')
        })
        console.log(item.id, item.name, item.release_date, item.total_tracks, item.available_markets);
      }
      sessionStorage.setItem(cacheKey, LZString.compress(JSON.stringify(artistContents)));
    }
    return JSON.parse(LZString.decompress(sessionStorage.getItem(cacheKey)));
  }

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
                                <Card.Img src={artist.images[0].url} alt="artist" />
                              ) : (
                                <Card.Img src={noartist} alt="default artist" />
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
                                  }}>
                                    <Image onDragStart={e => e.preventDefault()} src={cross} fluid alt='remove artist' style={{width: "75%", height: "75%"}}/>
                                  </button>
                                ) : (
                                  <button className="item-buttons" onClick={() => {
                                    addToItemPool(id, type, songURL, imgURL, title, subtitle);
                                    setUpdater(!updater);
                                  }}>
                                    <Image onDragStart={e => e.preventDefault()} src={plus} fluid alt='add artist' style={{width: "65%", height: "65%"}}/>
                                  </button>
                                )}

                                <button className="item-buttons" style={{right: "2.5rem"}} onClick={async () => {
                                  const artistContents = await getAlbumsFromArtist(id, imgURL);
                                  if(artistContents) {
                                    addManyToItemPool(artistContents, 'album');
                                    setUpdater(!updater);
                                  }
                                }}>
                                  <Image onDragStart={e => e.preventDefault()} src={plus_all} fluid alt='add all albums in artist' style={{width: "60%", height: "60%"}}/>
                                </button>

                                <button className="remove-buttons" style={{right: "4.5rem"}} onClick={async () => {
                                  const artistContents = await getAlbumsFromArtist(id, imgURL);
                                  if(artistContents) {
                                    deleteManyFromItemPool(artistContents, 'album');
                                    setUpdater(!updater);
                                  }
                                }}>
                                  <Image onDragStart={e => e.preventDefault()} src={cross_all} fluid alt='remove all albums in artist' style={{width: "60%", height: "60%"}}/>
                                </button>
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