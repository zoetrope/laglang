import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind'
import styles from './styles';
let cx = classNames.bind(styles);

export default class WordItem extends Component {

  render() {

    const { word } = this.props;

    return (
      <div className={cx('worditem')}>
        <div className="row">
          <div className="col-xs-3">
            <span>[{word._type}]</span>
            <span>({word._score})</span>
          </div>
          <div className={cx('item') + ' ' + 'col-xs-9'}>
            {(()=> {
              switch (word._type) {
                case 'dictionary':
                  return <div>
                <pre>
                  <span>{word._source.word}</span><span>【{word._source.class}】</span>
                  <hr className={cx('separator')}/>
                  <div>{word._source.translation}</div>
                </pre>
                  </div>;
                case 'script':
                  return <div>
                <pre>{word._source.text_en}
                  <hr className={cx('separator')}/>
                  {word._source.text_ja}</pre>
                  </div>;
              }
            })()}
          </div>
        </div>
      </div>
    );
  }
}
