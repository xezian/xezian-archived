import styled from 'styled-components';

const BodyStyles = styled.div`
  background-color: ${props => props.theme.mainBackground};
  color: ${props => props.theme.textOne};
  height: 140vh;
  padding-top: 15vh;
`;

export default BodyStyles;
