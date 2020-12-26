import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Header />
      Page not found. Goto <Link to="/spotify-tier-list-maker/dashboard">Home Page</Link>
    </React.Fragment>
  );
};

export default NotFoundPage;
