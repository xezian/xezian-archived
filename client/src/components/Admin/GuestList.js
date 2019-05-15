import React, { Component } from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import { ALL_GUESTS_QUERY } from './gql';
import EmailGuests from './EmailGuests';

const GuestInfoStyles = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  .classy {
    background-color: ${props => props.theme.headerFooter};
    min-width: 40vw;
    padding: 0 30px;
    text-align: left;
  }
  .bright {
    color: #efa;
  }
  .other-side {
    float: right;
  }
  .center {
    margin: auto;
    display: table;
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
              <EmailGuests guests={data.guests} />
              <br />
              {data.guests.map(guest => {
                return (
                  <div key={guest.id}>
                    <div className="classy">
                      <span className="bright">{guest.name}</span>{' '}
                      <span className="other-side bright">
                        party of {guest.amount}
                      </span>
                      <span className="center">&mdash;</span>
                      <br />
                      {guest.vegetarian && (
                        <>
                          {guest.vegetarian} vegetarians <br />
                        </>
                      )}
                      {guest.meat && (
                        <>
                          {guest.meat} meat eaters <br />
                        </>
                      )}
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
