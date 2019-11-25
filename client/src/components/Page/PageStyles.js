import styled from 'styled-components';

const PageStyles = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  a {
    color: ${props => props.theme.linkText};
  }
  .App-header {
    z-index: 2;
    position: fixed;
    background-color: ${props => props.theme.headerFooter};
    height: 36px;
    width: 100vw;
    max-width: 100%;
    font-size: calc(10px + 2vmin);
  }
  .App-footer {
    width: 100vw;
    height: 26px;
    bottom: 0;
    position: fixed;
    max-width: 100%;
    background-color: ${props => props.theme.headerFooter};
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
