import styled from 'styled-components';

const OuterBorder = styled.div`
  padding: 10vh 10vw;
  margin: 10px;
  border-radius: 20px;
  min-height: 100vh;
  background-color: ${props => props.theme.headerFooter}84;
  border: 1px solid ${props => props.theme.textThree};
`;

export default OuterBorder;
