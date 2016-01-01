import React, { Component, PropTypes } from 'react';
import {separator} from './styles';

export default class WordItem extends Component {

  render() {

    const { word } = this.props;

    return (
      <div>
        <span>{word._id}</span>
        <span>[{word._type}]</span>
        <span>({word._score})</span>
        {(()=> {
          switch (word._type) {
            case 'dictionary':
              return <div>
                <pre>
                  <span>{word._source.word}</span><span>【{word._source.class}】</span>
                  <hr className={separator}/>
                  <div>{word._source.translation}</div>
                </pre>
              </div>;
            case 'script':
              return <div>
                <pre>{word._source.text_en}
                  <hr className={separator}/>
                  {word._source.text_ja}</pre>
              </div>;
          }
        })()}
      </div>
    );
  }
}
