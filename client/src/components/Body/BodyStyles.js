import styled from 'styled-components';

const BodyStyles = styled.div`
  background-color: ${props => props.theme.mainBackground};
  color: ${props => props.theme.textOne};
  height: 100%;
  padding: 15vh 0;
`;

export default BodyStyles;
