import styled from 'styled-components';

const ContactStyles = styled.div`
  width: 100vw;
  height: 100vh;
  display: inline-block;
  background-color: #12afec;
  border-bottom: 1px solid #1e305c;
  .innerland {
    margin: 0 auto;
    margin-top: 1rem;
    display: flex;
    height: 80vh;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #4567ef;
    text-transform: uppercase;
    border: 1px solid #1e305c;
    color: #1e305c;
    width: 50vw;
    label {
      display: block;
      margin-bottom: 1rem;
    }
    input,
    textarea,
    select {
      width: 70vw;
      padding: 0.5rem;
      font-size: 1rem;
      color: #1e305c;
      background-color: #ffeebb;
      border: 1px solid #1e305c;
    }
    input::placeholder,
    textarea::placeholder,
    select::placeholder {
      color: #12aeeccf;
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
      background-color: #12afec;
      border: 1px solid #1e305c;
      font-size: 2rem;
      font-weight: 600;
    }
    button:hover,
    input[type='submit'] {
      background-color: #12afec;
      border: 1px solid #ffeebb;
    }
    button:active,
    input[type='submit'] {
      background-color: #1e305c;
      border: 1px solid #12afec;
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
