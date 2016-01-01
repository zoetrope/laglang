import React, { Component } from 'react';
import Helmet from 'react-helmet';

require('./favicon.ico');

export default class App extends Component {

  render() {
    return <div>
      <Helmet title='Go + React + Redux = rocks!' />
      {this.props.children}
    </div>;
  }

}
