import React, { useState } from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import _ from 'lodash';
import notrack from '../images/notrack.svg';
import plus from '../../tierlist/imgs/plus.svg'
import { TierListContext } from '../../tierlist/TierListContext';
import { AudioContext } from '../../tierlist/AudioContext';

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
                    <AudioContext.Consumer>
                      {({getCurrentAudio, setCurrentAudio}) => (
                        <div className='search-entry' style={{margin: "0.25rem 0", backgroundColor: containsItem(id, type) ? "black" : ""}}
                          onClick={() => {
                            if (containsItem(id, type)) deleteFromItemPool(id, type);
                            else addToItemPool(id, type, songURL, imgURL, title, subtitle, audioURL, isExplicit);
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
                                      <Card.Img src={imgURL} alt="track album cover" />
                                    ) : (
                                      <Card.Img src={notrack} alt="default album cover" />
                                    )}
                                  </a>
                                </Col>
                                <Col>
                                  <Card.Body>
                                    <Card.Title style={{color: containsItem(id, type) ? "#555" : ""}}>{title}</Card.Title>
                                    <div style={{display: 'flex', alignItems: 'start' }}>
                                      {isExplicit && <div style={{userSelect: 'none', transform: 'translateY(3px)', marginRight: '0.2rem', fontSize: '0.5rem', textAlign: 'center', display: 'inline-block', borderRadius: '2px', backgroundColor: containsItem(id, type) ? '#555' : '#AAAAAA', color: containsItem(id, type) ? 'black' : '#121212', width: '0.75rem', height: '0.75rem'}}>E</div>}
                                      <Card.Text>
                                        <small style={{color: containsItem(id, type) ?  "#555" : ""}}>{subtitle}</small>
                                      </Card.Text>
                                    </div>
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
                                else addToItemPool(id, type, songURL, imgURL, title, subtitle, audioURL, isExplicit);
                                setUpdater(!updater);
                            }}>
                              <Image className={`item-buttons-icon ${containsItem(id, type) ? 'rotate' : ''}`} onDragStart={e => e.preventDefault()} src={plus} fluid alt={`${containsItem(id, type) ? 'remove' : 'add'} track`}/>
                            </button>
                            { audioURL && !containsItem(id, type) ? <AudioPlayer key={getCurrentAudio()} src={audioURL} getCurrentAudio={getCurrentAudio} setCurrentAudio={setCurrentAudio}/> : <div style={{height: "1.25rem"}} onClick={(e) => e.stopPropagation()}/>  }
                          </div>
                        </div>
                      )}
                    </AudioContext.Consumer>
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