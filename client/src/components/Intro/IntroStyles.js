import styled from 'styled-components';

const IntroStyles = styled.div`
  padding-left: 5vw;
  padding-right: 5vw;
  color: ${props => props.color};
  button {
    background-color: ${props => props.backColor};
  }
`;

export default IntroStyles;
