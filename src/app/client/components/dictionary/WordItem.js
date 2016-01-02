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
            <div>[{word._type}]</div>
            <div>({word._score})</div>
            <div>edit</div>
          </div>
          <div className={cx('item') + ' ' + 'col-xs-9'}>
            {(()=> {
              switch (word._type) {
                case 'dictionary':
                  return <div>
                    <span>{word._source.word}</span><span>【{word._source.class}】</span>
                    <pre>{word._source.translation}</pre>
                  </div>;
                case 'script':
                  return <div>
                    <div>{word._source.text_en}</div>
                    <pre>{word._source.text_ja}</pre>
                  </div>;
              }
            })()}
          </div>
        </div>
      </div>
    );
  }
}
