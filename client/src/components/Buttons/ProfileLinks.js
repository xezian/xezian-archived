import React, { Component } from 'react';
import styled from 'styled-components';

const LinkTray = styled.div`
  position: absolute;
  left: 2vw;
  width: 180px;
  height: 16px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 20px);
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;
  justify-content: space-around;
  align-content: space-around;
  img {
    background-color: ${props => props.theme.mainBackground};
    border-radius: 50%;
    width: auto;
    padding: 2px;
    height: 17px;
    :hover {
      height: 30px;
    }
    :active {
      height: 23px;
    }
  }
`;

export default class ProfileLinks extends Component {
  state = {
    links: [
      {
        uid: 1,
        link: 'https://github.com/xezian',
        name: 'github'
      },
      {
        uid: 2,
        link: 'https://stackoverflow.com/users/8524758/jsonaleo',
        name: 'stackoverflow'
      },
      {
        uid: 3,
        link: 'https://www.linkedin.com/in/jason-a-leo',
        name: 'linkdn'
      },
      {
        uid: 4,
        link: 'https://twitter.com/JSONaleo',
        name: 'twit'
      }
    ]
  };
  render() {
    return (
      <LinkTray>
        {this.state.links.map(link => {
          return (
            <a
              key={link.uid}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={`/icons/${link.name}.png`} alt="social-icon" />
            </a>
          );
        })}
      </LinkTray>
    );
  }
}
