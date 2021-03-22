import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from './store/store';
import SidebarSearch from './sidebar/SidebarSearch';
import TierList from './tierlist/TierList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sidebar-styles.css';

ReactDOM.render(
  <Provider store={store}>
    <Container fluid>
      <Row>
        <Col>
          <TierList />
        </Col>
        <Col xl="auto">
          <SidebarSearch />
        </Col>
      </Row>
    </Container>
  </Provider>,
  document.getElementById('root')
);
