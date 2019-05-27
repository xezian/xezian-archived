import styled from "styled-components";
import background from "../../images/background.jpg";

const IntroStyles = styled.div`
  background: linear-gradient(
      ${props => props.theme.mainBackground}78,
      ${props => props.theme.mainBackground}78
    ),
    url(${background});
  background-size: cover;
  margin: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: 0;
  padding: 10vh 10vw 20vh 10vw;
  color: ${props => props.color};
  button {
    background-color: ${props => props.backColor};
    z-index: 3;
    &:focus {
      outline: 0;
    }
  }
  .techList {
    li {
      summary {
        font-family: Lobster, serif;
        font-size: 20px;
        :focus {
          outline: none;
        }
        cursor: pointer;
        user-select: none;
      }
      list-style-image: url("/icons/coder.png");
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
    opacity: 0.6;
    display: block;
    width: 270px;
    padding: none;
    border-radius: 13px;
    border: 1px solid ${props => props.theme.textOne};
    @media screen and (max-width: 525px) {
      width: 100%;
    }
  }
  #clock {
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
  }
  #clock #format {
    visibility: hidden;
  }
  #clock:hover #format {
    visibility: visible;
  }
`;

export default IntroStyles;
