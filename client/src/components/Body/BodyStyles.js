import styled from 'styled-components';

const BodyStyles = styled.div`
    background-color: ${props => props.theme.mainBackground};
    color: ${props => props.theme.textOne};
    padding-top: 10vh;
    height: 120vh;
`;

export default BodyStyles;