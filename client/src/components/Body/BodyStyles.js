import styled from 'styled-components';

const BodyStyles = styled.div`
  background-color: ${props => props.theme.mainBackground};
  color: ${props => props.theme.textOne};
  min-height: 100vh;
  min-width: 100vw;
`;

export default BodyStyles;
