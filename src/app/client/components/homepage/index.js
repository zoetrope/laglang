import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import styles from './styles';

export default class Homepage extends Component {
  static onEnter({store, nextState, replaceState, callback}) {
    // Load here any data.
    callback(); // this call is important, don't forget it
  }

  render() {
    return <div>
      <Helmet
        title='Home page'
        meta={[
          {
            property: 'og:title',
            content: 'Golang Isomorphic React/Hot Reloadable/Redux/Css-Modules Starter Kit'
          }
        ]} />
      <h1 className={styles['example']}> Laglang </h1>
      <br />
      <button className={styles['btn'] + ' ' + styles['btn-default']}>push</button>
      <p className={styles['p']}>
        Please take a look at <Link className={styles['link']} to='/docs'>usage</Link> page.
      </p>
    </div>;
  }

}
