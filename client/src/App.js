import React, { Component } from 'react';
import Page from './components/Page/Page';

export default class MyApp extends Component {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const { pageProps } = this.props;
    console.log(pageProps);
    return <Page {...pageProps} />;
  }
}
