import React from 'react';
import { Card, Container, Row, Col  } from 'react-bootstrap';
import _ from 'lodash';
import music from '../images/music.jpeg';

const AlbumsList = ({ albums }) => {
  return (
    <React.Fragment>
      {Object.keys(albums).length > 0 && (
        <div className="albums">
          {albums.items.map((album, index) => {
            return (
              <React.Fragment key={index}>
                <Card>
                  <Container>
                    <Row noGutters>
                      <Col xs="auto">
                        <a
                          target="_blank"
                          href={album.external_urls.spotify}
                          rel="noopener noreferrer"
                          className="card-image-link"
                        >
                          {!_.isEmpty(album.images) ? (
                            <Card.Img src={album.images[0].url} alt="" />
                          ) : (
                            <img src={music} alt="" />
                          )}
                        </a>
                      </Col>
                      <Col>
                        <Card.Body>
                          <Card.Title style={{margin: '0'}}>{album.name}</Card.Title>
                          <Card.Text>
                            <small>
                              {album.artists.map((artist) => artist.name).join(', ')}
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

export default AlbumsList;