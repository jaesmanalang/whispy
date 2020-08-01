import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, SignInPage, SignUpPage } from './pages';

import * as ROUTES from './constants/routes';

const App = () => (
  <Router>
    <Switch>
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
    </Switch>
  </Router>
);

export default App;
