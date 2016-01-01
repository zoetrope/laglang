import React, { Component, PropTypes } from 'react';

export default class WordItem extends Component {

  render() {

    const { word } = this.props;

    return (
      <li>
        <div>
          <label>{word._source.word}</label>{word._source.translation} ({word._score})
        </div>
      </li>
    );
  }
}
