import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo1 from './logo/logo1.svg';
import logo2 from './logo/logo2.svg';

const LogoLayer = styled.img`
  position: absolute;
  animation: ${props => props.direction} infinite ${props => props.time} linear;
  height: 100px;
`;

const LogoContainer = styled.div`
  height: 0px;
  width: 87vw;
  display: flex;
  flex-direction: ${props => props.flex};
  align-items: center;
`;

const Logo = props => {
  return (
    <LogoContainer flex={props.flex}>
      <Link to="/">
        <LogoLayer
          direction="App-logo-spin-right"
          time={props.time}
          src={logo1}
          alt="logo"
        />
        <LogoLayer
          direction="App-logo-spin-left"
          time={props.time}
          src={logo2}
          className="App-logo1"
          alt="logo"
        />
      </Link>
    </LogoContainer>
  );
};

export default Logo;
