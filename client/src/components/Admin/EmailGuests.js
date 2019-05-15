import React, { useState } from 'react';
import styled from 'styled-components';

const EmailStyle = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  button {
    background-color: ${props => props.theme.headerFooter};
  }
  textarea {
    width: 60%;
    min-height: 300px;
  }
`;

const EmailGuests = props => {
  const [visible, setVisible] = useState(false);
  const [emailBody, setEmailBody] = useState('');
  const [buttonChar, setButtonChar] = useState('V');
  const sendEmails = e => {
    e.preventDefault();
    console.log(props.guests);
  };
  return (
    <EmailStyle>
      <label htmlFor="point">
        Mass Email{' '}
        <button
          name="point"
          onClick={e => {
            e.preventDefault();
            setVisible(!visible);
            setButtonChar(!visible ? '^' : 'V');
          }}
        >
          {buttonChar}
        </button>
      </label>
      {visible && (
        <>
          <br />
          <textarea
            value={emailBody}
            onChange={e => {
              e.preventDefault();
              setEmailBody(e.target.value);
            }}
          />
          <br />
          <button onClick={sendEmails}>
            <span role="img" aria-label="email envelope">
              📧
            </span>
          </button>
        </>
      )}
    </EmailStyle>
  );
};

export default EmailGuests;
