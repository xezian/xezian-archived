import styled from 'styled-components';

const IntroStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${props => props.color};
  details {
    padding: 5px 0;
    summary::-webkit-details-marker {
      display: none;
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
      list-style: none;
    }
    li li:first-child {
      margin-top: 10px;
    }
    li li {
      list-style-image: none;
      list-style-type: lower-greek;
    }
    line-height: 25px;
  }
  #selfie {
    opacity: 0.6;
    display: block;
    width: 270px;
    margin: 0 auto;
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
