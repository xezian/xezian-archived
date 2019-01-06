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
  .outerBorder {
    padding: 10px;
    margin: 10px;
    border-radius: 20px;
    background-color: ${props => props.theme.headerFooter}84;
    border: 1px solid ${props => props.theme.textThree};
    float: right;
  }
  #selfie {
    display: block;
    width: 300px;
    padding: none;
    border-radius: 13px;
    border: 1px solid ${props => props.theme.textOne};
    background-image: url('/images/selfie/jpg');
    @media screen and (max-width: 525px) {
      width: 100%;
    }
  }
  #clock {
    cursor: pointer;
    user-select: none;
  }
  #format {
  }
  #clock #format {
    visibility: hidden;
  }
  #clock:hover #format {
    visibility: visible;
  }
`;

export default IntroStyles;
