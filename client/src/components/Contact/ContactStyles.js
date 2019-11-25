import styled from 'styled-components';

const ContactStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .innerland {
    margin: 0 auto;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.innerBackground};
    text-transform: uppercase;
    border: 1px solid ${props => props.theme.headerFooter};
    color: ${props => props.theme.textOne};
    border-radius: 5px;
    width: 50vw;
    label {
      display: block;
      margin-bottom: 1rem;
    }
    textarea {
      resize: vertical;
      height: 40vh;
    }
    input,
    textarea,
    select {
      width: 70vw;
      padding: 0.5rem;
      font-size: 1.3rem;
      color: ${props => props.theme.textOne};
      background-color: ${props => props.theme.formField};
      border: 1px solid ${props => props.theme.headerFooter};
    }
    input::placeholder,
    textarea::placeholder,
    select::placeholder {
      color: ${props => props.theme.textThree};
      font-family: cursive;
    }
    button,
    input[type='submit'] {
      display: inline-block;
      margin: 0 auto;
      width: auto;
      height: 41px;
      line-height: 41px;
      border-radius: 1rem;
      background-color: ${props => props.theme.textTwo};
      border: 1px solid ${props => props.theme.headerFooter};
      font-size: 2rem;
      font-weight: 600;
    }
    button,
    input[type='submit']:disabled span {
      color: black;
    }
    button:hover,
    input[type='submit'] {
      background-color: ${props => props.theme.mainBackground};
      border: 1px solid ${props => props.theme.formField};
    }
    button:active,
    input[type='submit'] {
      background-color: ${props => props.theme.headerFooter};
      border: 1px solid ${props => props.theme.mainBackground};
    }
    button:focus,
    input:focus,
    textarea:focus,
    select:focus {
      outline: none;
    }
  }
`;

export default ContactStyles;
