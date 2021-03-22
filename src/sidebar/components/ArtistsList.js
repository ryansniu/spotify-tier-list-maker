import React from 'react';
import { Card, Container, Row, Col  } from 'react-bootstrap';
import _ from 'lodash';
import music from '../images/music.jpeg';

const ArtistsList = ({ artists }) => {
  return (
    <React.Fragment>
      {Object.keys(artists).length > 0 && (
        <div className="artists">
          {artists.items.map((artist, index) => {
            return (
              <React.Fragment key={index}>
                <Card>
                  <Container>
                    <Row noGutters>
                      <Col xs="auto">
                        <a
                          target="_blank"
                          href={artist.external_urls.spotify}
                          rel="noopener noreferrer"
                        >
                          {!_.isEmpty(artist.images) ? (
                            <Card.Img src={artist.images[0].url} alt="" />
                          ) : (
                            <img src={music} alt="" />
                          )}
                        </a>
                      </Col>
                      <Col>
                        <Card.Body>
                          <Card.Title style={{margin: '0'}}>{artist.name}</Card.Title>
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

export default ArtistsList;