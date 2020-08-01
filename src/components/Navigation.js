import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../auth';

import * as ROUTES from '../constants/routes';

const Navigation = () => {
  const { authUser } = useContext(AuthContext);
  return (
    <nav>
      <ul>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</ul>
    </nav>
  );
};

const NavigationAuth = () => (
  <Fragment>
    <NavItem link={ROUTES.HOME}>Home</NavItem>
    <NavItem link={ROUTES.SIGN_OUT}>Sign Out</NavItem>
  </Fragment>
);

const NavigationNonAuth = () => (
  <Fragment>
    <NavItem link={ROUTES.HOME}>Home</NavItem>
    <NavItem link={ROUTES.SIGN_IN}>Sign In</NavItem>
    <NavItem link={ROUTES.SIGN_UP}>Sign Up</NavItem>
  </Fragment>
);

const NavItem = ({ children, link }) => (
  <li>
    <Link to={link}>{children}</Link>
  </li>
);

export default Navigation;
