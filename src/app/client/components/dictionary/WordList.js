import React, { Component, PropTypes } from 'react';
import WordItem from './WordItem';

export default class WordList extends Component {
  render() {

    const { searchResult } = this.props;

    return (
      <ul>
        {searchResult.hits.map(hit =>
          <WordItem key={hit._id} word={hit}/>
        )}
      </ul>
    );
  }
}
