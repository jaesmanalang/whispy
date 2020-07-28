import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.h1`
  font-family: 'Fugaz One', cursive;
  color: ${props => props.color || '#f0f0f0'};
  cursor: pointer;
`;

const Logo = props => <StyledLogo color={props.color}>Whispy</StyledLogo>;

export default Logo;
