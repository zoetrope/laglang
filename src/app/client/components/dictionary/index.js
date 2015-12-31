import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { IndexLink } from 'react-router';
import { example, p, link } from '../homepage/styles';
import SearchBox from './SearchBox';
import WordList from './WordList';
import { searchWord } from '../../actions/word';

export default class Dictionary extends Component {

  static onEnter({store, nextState, replaceState, callback}) {
    callback();
  }

  render() {
    const {searchWord , dictionary} = this.props;

    return <div>
      <Helmet title='Word'/>
      <h2 className={example}>Word:</h2>
      <div className={p}>
        <SearchBox query={dictionary.query} onSearch={searchWord}/>
        <WordList words={dictionary.words}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dictionary);

