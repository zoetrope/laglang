import React, { Component, PropTypes } from 'react';

export default class WordItem extends Component {

  render() {

    const { word } = this.props;

    return (
      <li>
        <div>
          <label>{word.word}</label>{word.translation}
        </div>
      </li>
    );
  }
}
