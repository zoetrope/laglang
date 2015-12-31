import React, { Component, PropTypes } from 'react';

export default class WordItem extends Component {

  render() {

    const { word } = this.props;

    return (
      <li>
        <div>
          <label>{word.Word}</label>{word.Translation}
        </div>
      </li>
    );
  }
}
