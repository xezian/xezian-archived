import styled from 'styled-components';

const PageStyles = styled.div`
  .App-header {
    position: fixed;
    top: 0;
    background-color: ${props => props.theme.headerFooter};
    max-height: 9vh;
    width: 100vw;
    font-size: calc(10px + 2vmin);
  }
  .App-footer {
    background-color: ${props => props.theme.headerFooter};
    min-height: 9vh;
    width: 100vw;
    font-size: calc(10px + 2vmin);
    position: fixed;
    bottom: 0;
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