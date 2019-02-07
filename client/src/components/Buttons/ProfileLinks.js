import React, { Component } from 'react';
import styled from 'styled-components';

const LinkTray = styled.div`
  position: absolute;
  left: 2vw;
  line-height: 75px;
  img {
    background-color: ${props => props.theme.mainBackground};
    border-radius: 50%;
    width: auto;
    padding: 2px;
    margin: 0px 4px;
    height: 27px;
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
        name: 'linkedin'
      },
      {
        uid: 4,
        link: 'https://twitter.com/JSONaleo',
        name: 'twitter'
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
              <img src={`/icons/${link.name}.png`} alt={link.name} />
            </a>
          );
        })}
      </LinkTray>
    );
  }
}
