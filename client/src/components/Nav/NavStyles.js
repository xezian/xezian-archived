import styled from 'styled-components';

const NavStyles = styled.div`
  .nav-opts {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100vw;
    height: 100px;
  }
  .nav-item h4, a {
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    color: ${props => props.theme.textTwo};
    top: 0;
    line-height: 0px;
    height: 0px;
    padding: 0px 3px 0px 3px;
  }
`;

export default NavStyles;