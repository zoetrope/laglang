import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { IndexLink } from 'react-router';
import { example, p, link } from '../homepage/styles';
import InputBox from './InputBox';

export default class Memo extends Component {

  static onEnter({store, nextState, replaceState, callback}) {
    callback();
  }

  render() {
    const {searchWord , dictionary} = this.props;

    return <div>
      <Helmet title='Memo'/>
      <div className={p}>
        <InputBox />
      </div>
      <br />
      go <IndexLink to='/' className={link}>home</IndexLink>
    </div>;
  }

}

function mapStateToProps(state) {
  return {dictionary: state.dictionary};
}

function mapDispatchToProps(dispatch) {
  return {
    searchWord: text => dispatch(searchWord(text))
  }
}

//TODO: use @connect decorator
export default connect(mapStateToProps, mapDispatchToProps)(Memo);

