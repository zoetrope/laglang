import React, { Component, PropTypes } from 'react';
import WordItem from './WordItem';

export default class WordList extends Component {
  render() {

    const { words } = this.props;

    return (
      <ul>
        {words.map(word =>
          <WordItem key={word.id} word={word}/>
        )}
      </ul>
    );
  }
}
