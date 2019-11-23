import styled from "styled-components";

const PageStyles = styled.div`
  display: flex;
  flex-direction: column;
  a {
    color: ${props => props.theme.linkText};
  }
  .App-header {
    z-index: 2;
    background-color: ${props => props.theme.headerFooter};
    max-height: 9vh;
    width: 100vw;
    font-size: calc(10px + 2vmin);
  }
  .App-footer {
    min-width: 100vw;
    background-color: ${props => props.theme.headerFooter};
    height: 8vh;
  }
  .App-link {
    color: #61dafb;
  }

  @keyframes App-logo-spin-right {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes App-logo-spin-left {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`;

export default PageStyles;
