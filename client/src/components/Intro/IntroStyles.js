import styled from 'styled-components';

const IntroStyles = styled.div`
  padding: 15vh 5vw;
  color: ${props => props.color};
  button {
    background-color: ${props => props.backColor};
  }
`;

export default IntroStyles;
