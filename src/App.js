import React, { useEffect, useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import { AuthContext } from './context/auth/authContext';
import { auth } from './firebase';

const App = () => {
  const [currentUser, setCurrentUser] = useContext(AuthContext);

  useEffect(() => {
    console.log(currentUser);
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setCurrentUser(user);
        console.log(user.displayName + ' is logged in');
      } else {
        setCurrentUser(null);
      }
    });
    return () => unsubscribe();
  }, [currentUser, setCurrentUser]);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/login"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInPage />)}
        />
      </Switch>
    </Router>
  );
};

export default App;
