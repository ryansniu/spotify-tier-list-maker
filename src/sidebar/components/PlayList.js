import React, { useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import _ from 'lodash';
import music from '../images/music.jpeg';
import { TierListContext } from '../../tierlist/TierListContext';

const PlayList = ({ playlist }) => {
  const [updater, setUpdater] = useState(false);
  return (
    <div>
      {Object.keys(playlist).length > 0 && (
        <div className="playlist">
          {playlist.items.map((item, index) => {
            let id = item.id, type = 'playlist', songURL = item.external_urls.spotify, title = item.name, subtitle = "By " + item.owner.display_name;
            let imgURL = !_.isEmpty(item.images) ? item.images[0].url : null;
            return (
              <React.Fragment key={index}>
                <TierListContext.Consumer>
                  {({containsItem, addToItemPool}) => (
                    <Card style={{maxWidth: "22rem", width: "22rem", marginLeft: "0.5rem", marginRight: "0.5rem"}}>
                      <Container>
                        <Row>
                          <Col xs="auto">
                            <a
                              target="_blank"
                              href={songURL}
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
                              <Card.Title style={{margin: '0'}}>{title}</Card.Title>
                              <Card.Text>{subtitle}</Card.Text>
                            </Card.Body>
                          </Col>
                          <Col xs="auto">
                            <div>
                              {containsItem(id, type) ? (
                                <button disabled className="item-buttons">x</button>
                              ) : (
                                <button className="item-buttons" onClick={() => {
                                  addToItemPool(id, type, songURL, imgURL, title, subtitle);
                                  setUpdater(!updater);
                                }}>+</button>
                              )}
                              <button className="item-buttons">v</button>
                            </div>
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
    </div>
  );
};

export default PlayList;