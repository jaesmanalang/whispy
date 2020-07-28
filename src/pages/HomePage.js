import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import PostList from '../components/PostList';

const HomePage = () => (
  <Fragment>
    <Navbar />
    <div className="container">
      <PostList />
    </div>
  </Fragment>
);

export default HomePage;
