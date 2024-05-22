import React, { useState } from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import _ from 'lodash';
import notrack from '../images/notrack.svg';
import plus from '../../tierlist/imgs/plus.svg'
import { TierListContext } from '../../tierlist/TierListContext';

import AudioPlayer from '../../tierlist/components/AudioPlayer';

const TracksList = ({ tracks }) => {
  const [updater, setUpdater] = useState(false);
  return (
    <React.Fragment>
      {Object.keys(tracks).length > 0 && (
        <div className="tracks">
          {tracks.items.map((track, index) => {
            let id = track.id, type = 'track', songURL = track.external_urls.spotify, title = track.name, subtitle = track.artists.map((artist) => artist.name).join(', ');
            let imgURL = !_.isEmpty(track.album.images) ? track.album.images[0].url : null;
            let audioURL = track.preview_url, isExplicit = track.explicit;
            return (
              <React.Fragment key={index}>
                <TierListContext.Consumer>
                  {({containsItem, addToItemPool, deleteFromItemPool}) => (
                    <div className='search-entry' style={{margin: "0.25rem 0", backgroundColor: containsItem(id, type) ? "black" : ""}}>
                      <Card className="search-card"
                        onClick={() => {
                          if (containsItem(id, type)) deleteFromItemPool(id, type);
                          else addToItemPool(id, type, songURL, imgURL, title, subtitle, audioURL, isExplicit);
                          setUpdater(!updater);
                        }}
                      >
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
                              {/* {audioURL && <AudioPlayer src={audioURL} />} */}
                            </Col>
                            <Col>
                              <Card.Body>
                                <Card.Title style={{color: containsItem(id, type) ? "#555" : ""}}>{title}</Card.Title>
                                <div style={{display: 'flex', alignItems: 'center' }}>
                                  {isExplicit && <div style={{marginRight: '0.2rem', fontSize: '0.5rem', textAlign: 'center', display: 'inline-block', borderRadius: '2px', backgroundColor: containsItem(id, type) ? '#555' : '#AAAAAA', color: containsItem(id, type) ? 'black' : '#121212', width: '0.75rem', height: '0.75rem'}}>E</div>}
                                  <Card.Text>
                                    <small style={{color: containsItem(id, type) ?  "#555" : ""}}>{subtitle}</small>
                                  </Card.Text>
                                </div>
                              </Card.Body>
                            </Col>
                          </Row>
                        </Container>
                      </Card>
                      <button className="item-buttons"
                        onClick={() => {
                          if (containsItem(id, type)) deleteFromItemPool(id, type);
                          else addToItemPool(id, type, songURL, imgURL, title, subtitle, audioURL, isExplicit);
                          setUpdater(!updater);
                      }}>
                        <Image className={`item-buttons-icon ${containsItem(id, type) ? 'rotate' : ''}`} onDragStart={e => e.preventDefault()} src={plus} fluid alt={`${containsItem(id, type) ? 'remove' : 'add'} track`}/>
                      </button>
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

export default TracksList;