import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Header from '#app/components/header';
import { container } from './styles'

require('./favicon.ico');

export default class App extends Component {

  render() {
    return <div>
      <Helmet title='Vert.x + Kotlin + React + Redux'/>
      <Header></Header>
      <div className={ container }>
        {this.props.children}
      </div>
    </div>;
  }

}
