import React, { Component, PropTypes } from 'react';
import WordItem from './WordItem';
import classNames from 'classnames/bind'
import styles from './styles';
let cx = classNames.bind(styles);

export default class WordList extends Component {
  render() {

    const { searchResult } = this.props;

    return (
      <div className={cx('wordlist')}>
        <div className={cx('wordlist-title')}>Search Result</div>
        {searchResult.hits.map(hit =>
          <WordItem key={hit._id} word={hit}/>
        )}
      </div>
    );
  }
}
