import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import { auth } from './firebase';

const App = () => {
  return (
    <Router>
      {console.log(currentUser)}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={SignInPage} />
      </Switch>
    </Router>
  );
};

export default App;
