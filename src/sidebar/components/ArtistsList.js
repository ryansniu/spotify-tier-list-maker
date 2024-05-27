import React, { useState } from 'react';
import { Card, Container, Row, Col, Image, OverlayTrigger, Tooltip, DropdownButton, Dropdown } from 'react-bootstrap';
import _ from 'lodash';
import noartist from '../images/noartist.svg';
import plus from '../../tierlist/imgs/plus.svg'
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
          subtitle: 'Album • ' + item.artists.map((artist) => artist.name).join(', '),
          audioURL: null,
          isExplicit: null
        })
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
            let id = artist.id, type = 'artist', songURL = artist.external_urls.spotify, title = artist.name, subtitle = 'Artist';
            let imgURL = !_.isEmpty(artist.images) ? artist.images[0].url : null;
            return (
              <React.Fragment key={index}>
                <TierListContext.Consumer>
                  {({containsItem, addToItemPool, deleteFromItemPool, addManyToItemPool, deleteManyFromItemPool}) => (
                    <div className='search-entry' style={{margin: "0.25rem 0", backgroundColor: containsItem(id, type) ? "black" : ""}}
                      onClick={() => {
                        if (containsItem(id, type)) deleteFromItemPool(id, type);
                        else addToItemPool(id, type, songURL, imgURL, title, subtitle, null, null);
                        setUpdater(!updater);
                      }}
                    >
                      <Card className="search-card">
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
                                onClick={(e) => e.stopPropagation()}
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
                                <Card.Text>
                                  <small style={{color: containsItem(id, type) ?  "#555" : ""}}>{subtitle}</small>
                                </Card.Text>
                              </Card.Body>
                            </Col>
                          </Row>
                        </Container>
                      </Card>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', transform: 'translateY(2px)' }}>
                        <button className="item-buttons"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (containsItem(id, type)) deleteFromItemPool(id, type);
                            else addToItemPool(id, type, songURL, imgURL, title, subtitle, null, null);
                            setUpdater(!updater);
                        }}>
                          <Image className={`item-buttons-icon ${containsItem(id, type) ? 'rotate' : ''}`} onDragStart={e => e.preventDefault()} src={plus} fluid alt={`${containsItem(id, type) ? 'remove' : 'add'} album`}/>
                        </button>
                        <OverlayTrigger
                          placement={'top'}
                          overlay={<Tooltip>More Options</Tooltip>}
                        >
                          <DropdownButton
                            className="item-dropdown"
                            size="lg"
                            variant="outline-secondary"
                            menuVariant="dark"
                            title="⋯"
                            menuRole="Add/Remove Artist Albums"
                            drop="start"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Dropdown.Item as="button" onClick={async () => {
                              const artistContents = await getAlbumsFromArtist(id, imgURL);
                              if(artistContents) {
                                addManyToItemPool(artistContents, 'album');
                                setUpdater(!updater);
                              }
                            }}>
                              Add All Albums
                            </Dropdown.Item>
                            <Dropdown.Item as="button" onClick={async () => {
                              const artistContents = await getAlbumsFromArtist(id, imgURL);
                              if(artistContents) {
                                deleteManyFromItemPool(artistContents, 'album');
                                setUpdater(!updater);
                              }
                            }}>
                              Remove All Albums
                            </Dropdown.Item>
                          </DropdownButton>
                        </OverlayTrigger>
                      </div>
                    </div>
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