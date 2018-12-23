import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { SORT_ORDER_MUTATION } from '../Admin/gql';
import { ALL_PROJECTS_QUERY } from '../Projects/gql';

export default class PlusMinus extends Component {
  state = {
    id: this.props.project.id,
    sortorder: this.props.project.sortorder,
    amount: 0
  };
  render() {
    return (
      <Mutation
        variables={this.state}
        mutation={SORT_ORDER_MUTATION}
        refetchQueries={[{ query: ALL_PROJECTS_QUERY }]}
      >
        {(sortOrder, { data, error, loading }) => {
          if (loading) return <p>...</p>;
          return (
            <>
              <button
                disabled={this.props.disabled}
                onClick={async e => {
                  e.preventDefault();
                  this.props.setDisabled(true);
                  await this.setState({
                    sortorder: this.props.project.sortorder,
                    amount: -1
                  });
                  await sortOrder();
                  this.props.setDisabled(false);
                }}
              >
                +
              </button>
              {this.props.project.sortorder}
              <button
                disabled={this.props.disabled}
                onClick={async e => {
                  e.preventDefault();
                  await this.setState({
                    sortorder: this.props.project.sortorder,
                    amount: 1
                  });
                  await sortOrder();
                }}
              >
                -
              </button>
              {data && console.log(data.sortOrder.message)}
            </>
          );
        }}
      </Mutation>
    );
  }
}
