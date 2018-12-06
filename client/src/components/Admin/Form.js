import styled from 'styled-components';

const Form = styled.form`
  box-shadow: 0 0 5px 3px ${props => props.theme.innerBackground};
  background: ${props => props.theme.headerFooter};
  border: 5px solid white;
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid black;
    &:focus {
      outline: 0;
      border-color: ${props => props.theme.mainBackground};
    }
  }
  button,
  input[type='submit'] {
    width: auto;
    background: ${props => props.theme.innerBackground};
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
  }
  fieldset {
    border: 0;
    padding: 0;
  }
`;

export default Form;
