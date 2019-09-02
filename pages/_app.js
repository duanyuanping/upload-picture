import React from 'react';
import App, { Container } from 'next/app';
// import Layout from 

export default class extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}