import React, { Component } from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import { ALL_GUESTS_QUERY } from './gql';

const GuestInfoStyles = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  .classy {
    background-color: ${props => props.theme.headerFooter};
    min-width: 40vw;
    padding: 0 30px;
  }
  hr {
    width: 70vw;
  }
`;

export default class GuestList extends Component {
  countGuests = (guests, type) => {
    let amt = 0;
    guests.forEach(guest => {
      amt += guest[type];
    });
    return amt;
  };
  copyAllEmails = (e, guests) => {
    let emails = '';
    guests.forEach(guest => {
      emails += guest.email + '; ';
    });
    this.textArea.value = emails;
    this.textArea.select();
    document.execCommand('copy');
    e.target.focus();
  };
  emailAll = guests => {
    let emails = '';
    guests.forEach(guest => {
      emails += guest.email + '; ';
    });
    return (
      <a display="button" href={`mailto:${emails}`}>
        Email Everybody!
      </a>
    );
  };
  render() {
    return (
      <Query query={ALL_GUESTS_QUERY}>
        {({ data, error, loading }) => {
          if (loading) return <Logo time="5s" flex="column" />;
          if (error) return <p>Error: {error.message}</p>;
          return (
            <GuestInfoStyles>
              Total: {this.countGuests(data.guests, 'amount')}
              <br />
              Vegetarian: {this.countGuests(data.guests, 'vegetarian')}
              <br />
              Meat: {this.countGuests(data.guests, 'meat')}
              <br />
              <button
                onClick={e => {
                  e.preventDefault();
                  this.copyAllEmails(e, data.guests);
                }}
              >
                Copy all Emails
              </button>
              <textarea
                style={{
                  opacity: `.01`,
                  height: `0`,
                  position: `absolute`,
                  zIndex: `-1`
                }}
                ref={textArea => (this.textArea = textArea)}
              />
              <br />
              {this.emailAll(data.guests)}
              <br />
              {data.guests.map(guest => {
                return (
                  <div key={guest.id}>
                    <div className="classy">
                      <strong>{guest.name}</strong>
                      <br />
                      {guest.vegetarian} vegetarians <br />
                      {guest.meat} meats <br />
                      {guest.amount} in the party <br />
                      <a href={`mailto:guest.email`}>{guest.email}</a> <br />
                      Note: {guest.note} <br /> <br />
                    </div>
                    <hr />
                  </div>
                );
              })}
            </GuestInfoStyles>
          );
        }}
      </Query>
    );
  }
}
