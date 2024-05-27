import React, { useState } from 'react';
import { Card, Container, Row, Col, Image, OverlayTrigger, Tooltip, DropdownButton, Dropdown } from 'react-bootstrap';
import _ from 'lodash';
import noalbum from '../images/noalbum.svg';
import plus from '../../tierlist/imgs/plus.svg'
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
          subtitle: item.artists.map((artist) => artist.name).join(', '),
          audioURL: item.preview_url,
          isExplicit: item.explicit
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
                              </Card.Body>
                            </Col>
                            <Col xs="auto">
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
                            menuRole="Add/Remove Album Tracks"
                            drop="start"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Dropdown.Item as="button" onClick={async () => {
                              const albumContents = await getTracksFromAlbum(id, imgURL);
                              if(albumContents) {
                                addManyToItemPool(albumContents, 'track');
                                setUpdater(!updater);
                              }
                            }}>
                              Add All Tracks
                            </Dropdown.Item>
                            <Dropdown.Item as="button" onClick={async () => {
                              const albumContents = await getTracksFromAlbum(id, imgURL);
                              if(albumContents) {
                                // TODO: if track in albumContents is in item pool, stop playing it
                                deleteManyFromItemPool(albumContents, 'track');
                                setUpdater(!updater);
                              }
                            }}>
                              Remove All Tracks
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

export default AlbumsList;