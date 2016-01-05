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

  componentWillMount() {
    if (this.props.location.query.query) {
      this.props.searchWord(this.props.location.query.query);
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.props.dictionary.query !== nextProps.location.query.query) {
      this.props.searchWord(nextProps.location.query.query);
    }
  }

  render() {
    const {searchWord , dictionary} = this.props;

    return <div>
      <Helmet title='Word'/>
      <div className={p}>
        <SearchBox query={dictionary.query} onSearch={searchWord}/>
        <WordList searchResult={dictionary.searchResult}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(Dictionary);

