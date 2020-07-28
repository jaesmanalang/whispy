import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background: ${props => props.bgColor || '#1f4068'};
  color: ${props => props.color || '#f0f0f0'};
  padding: 2rem 0;
  margin-bottom: 3rem;
`;

const Header = props => (
  <StyledHeader className="header">
    <div className="container">{props.children}</div>
  </StyledHeader>
);

export default Header;
