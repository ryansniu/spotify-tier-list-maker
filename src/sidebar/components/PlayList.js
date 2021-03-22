import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import _ from 'lodash';
import music from '../images/music.jpeg';

const PlayList = ({ playlist }) => {
  return (
    <div>
      {Object.keys(playlist).length > 0 && (
        <div className="playlist">
          {playlist.items.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <Card>
                  <Container>
                    <Row noGutters>
                      <Col xs="auto">
                        <a
                          target="_blank"
                          href={item.external_urls.spotify}
                          rel="noopener noreferrer"
                        >
                          {!_.isEmpty(item.images) ? (
                            <Card.Img src={item.images[0].url} alt="" />
                          ) : (
                            <img src={music} alt="" />
                          )}
                        </a>
                      </Col>
                      <Col>
                        <Card.Body>
                          <Card.Title style={{margin: '0'}}>{item.name}</Card.Title>
                          <Card.Text>
                            <small>By {item.owner.display_name}</small>
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
    </div>
  );
};

export default PlayList;