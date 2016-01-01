import React, { Component, PropTypes } from 'react';
import WordItem from './WordItem';
import {wordList} from './styles';

export default class WordList extends Component {
  render() {

    const { searchResult } = this.props;

    return (
      <div className={wordList}>
        {searchResult.hits.map(hit =>
          <WordItem key={hit._id} word={hit}/>
        )}
      </div>
    );
  }
}
