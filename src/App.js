import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import { AuthContext } from './context/auth/authContext';
import { auth } from './firebase';

const App = () => {
  const [currentUser, setCurrentUser] = useContext(AuthContext);

  useEffect(() => {
    console.log(currentUser);
    const unsubscribe = auth.onAuthStateChanged(async user => {
      if (user) {
        setCurrentUser(user);
      } else {
        console.log(currentUser + ' hello from useeffect');
      }
    });
    console.log(currentUser);
    return () => unsubscribe();
  }, [currentUser]);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={SignInPage} />
      </Switch>
    </Router>
  );
};

export default App;
