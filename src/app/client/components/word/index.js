import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { IndexLink } from 'react-router';
import { word } from './styles';
import { example, p, link } from '../homepage/styles';
import SearchBox from './SearchBox';
import WordList from './WordList';
import { getWord } from '../../actions/word';

export default class Word extends Component {

  static onEnter({store, nextState, replaceState, callback}) {
    callback();
  }

  render() {
    const {searchWord , words} = this.props;

    return <div className={word}>
      <Helmet title='Word'/>
      <h2 className={example}>Word:</h2>
      <div className={p}>
        <SearchBox onSearch={searchWord}/>
        <WordList words={words.words}/>
      </div>
      <br />
      go <IndexLink to='/' className={link}>home</IndexLink>
    </div>;
  }

}

//TODO: なにかおかしい？
function mapStateToProps(state) {
  return {words: state.words};
}

function mapDispatchToProps(dispatch) {
  return {
    searchWord: text => dispatch(getWord(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Word);

