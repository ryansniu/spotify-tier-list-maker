import React, { useState, useEffect, useContext } from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import _ from 'lodash';
import notrack from '../images/notrack.svg';
import { TierListContext } from '../../tierlist/TierListContext';
import { AudioContext } from '../../tierlist/AudioProvider';

import AudioPlayer from '../../tierlist/components/AudioPlayer';

const TracksList = ({ tracks }) => {
  const [updater, setUpdater] = useState(false);
  const { getCurrentAudioSrc, getCurrentAudioId, setCurrentAudio } = useContext(AudioContext);
  const { containsItem } = useContext(TierListContext);

  useEffect(() => {
    const currentAudioSrc = getCurrentAudioSrc();
    const currentAudioId = getCurrentAudioId();
    if (currentAudioId && currentAudioSrc) {
      const currentTrackStillExists = (tracks.items && tracks.items.some(track => track.preview_url === currentAudioSrc)) || containsItem(currentAudioId, 'track');
      if (!currentTrackStillExists) setCurrentAudio(null, null);
    }
  }, [tracks, getCurrentAudioId, getCurrentAudioSrc, setCurrentAudio, containsItem]);

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
                      {({getCurrentAudioId, getCurrentAudioSrc, setCurrentAudio}) => (
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
                                  <div style={{ position: 'relative'}}>
                                    <Card.Img src={imgURL || notrack} style={{filter: containsItem(id, type) ? "brightness(50%)" : "brightness(100%)"}} alt="track album cover"/>
                                    {
                                      !containsItem(id, type) && 
                                      <div className="audio-player">
                                        <AudioPlayer key={getCurrentAudioId()} id={id} src={audioURL} ext_link={songURL} getCurrentAudioId={getCurrentAudioId} getCurrentAudioSrc={getCurrentAudioSrc} setCurrentAudio={setCurrentAudio}/> 
                                      </div>
                                    }
                                  </div>
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