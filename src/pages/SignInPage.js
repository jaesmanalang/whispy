import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import SignInForm from '../components/SignInForm';

const SignInContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    margin-bottom: 3rem;
  }
`;

const SignInPage = () => {
  return (
    <SignInContainer>
      <div className="title text-center">
        <Logo color="#1f4068" />
      </div>
      <SignInForm className="form" />
    </SignInContainer>
  );
};

export default SignInPage;