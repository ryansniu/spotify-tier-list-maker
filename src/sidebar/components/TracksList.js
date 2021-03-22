import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import _ from 'lodash';
import music from '../images/music.jpeg';

const TracksList = ({ tracks }) => {
  return (
    <React.Fragment>
      {Object.keys(tracks).length > 0 && (
        <div className="tracks">
          {tracks.items.map((track, index) => {
            return (
              <React.Fragment key={index}>
                <Card>
                  <Container>
                    <Row noGutters>
                      <Col xs="auto">
                        <a
                          target="_blank"
                          href={track.external_urls.spotify}
                          rel="noopener noreferrer"
                        >
                          {!_.isEmpty(track.album.images) ? (
                            <Card.Img src={track.album.images[0].url} alt="" />
                          ) : (
                            <img src={music} alt="" />
                          )}
                        </a>
                      </Col>
                      <Col>
                        <Card.Body>
                          <Card.Title>{track.name}</Card.Title>
                          <Card.Text>
                            <small>
                              {track.artists.map((artist) => artist.name).join(', ')}
                            </small>
                          </Card.Text>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Container>
                </Card>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export default TracksList;