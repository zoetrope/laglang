import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Header from '#app/components/header';

require('./favicon.ico');

export default class App extends Component {

  render() {
    return <div>
      <Helmet title='Go + React + Redux = rocks!' />
      <Header></Header>
      {this.props.children}
    </div>;
  }

}
