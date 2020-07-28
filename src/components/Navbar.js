import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Logo from './Logo';

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav__list {
    display: flex;
    align-items: center;
    list-style-type: none;
  }

  .nav__item {
    margin: 0 0.5rem;
  }

  .nav__link {
    padding: 1rem 2rem;
    border-radius: 5px;
    letter-spacing: 1.3px;

    &:hover {
      background: #162447;
      color: #fff;
    }
  }

  .sign-in {
    background: #e43f5a;

    &:hover {
      background: #e43f5a;
      filter: brightness(90%);
    }
  }
`;

const Navbar = ({ history }) => (
  <Header>
    <StyledNavbar className="header__nav">
      <Logo onClick={() => history.push('/')} />
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/login" className="nav__link sign-in">
            Sign In
          </Link>
        </li>
      </ul>
    </StyledNavbar>
  </Header>
);

export default withRouter(Navbar);
