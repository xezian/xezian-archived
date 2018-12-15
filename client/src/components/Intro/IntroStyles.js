import styled from 'styled-components';

const IntroStyles = styled.div`
  padding: 15vh 5vw;
  color: ${props => props.color};
  button {
    background-color: ${props => props.backColor};
  }
  .techList {
    li {
      list-style-image: url('/icons/coder.png');
    }
    li li {
      list-style-image: none;
      list-style-type: lower-greek;
    }
    line-height: 18px;
  }
`;

export default IntroStyles;
