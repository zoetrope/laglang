import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind'
import styles from './styles';
let cx = classNames.bind(styles);

let hiddenTextarea;

class InputBox extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.text || '',
      isEditing: false,
      style: {
        height: 35,
        minHeight: this.props.minHeight || -Infinity,
        maxHeight: this.props.maxHeight || Infinity
      }
    };
  }

  handleSubmit(e) {
    const text = e.target.value.trim();
    this.props.onSave(text);
    this.setState({text: ''});
    console.log('submit: ' + text);
  }

  handleChange(e) {
    let height = this.calculateTextareaHeight(e);
    this.setState({
      text: e.target.value,
      style: {
        height: height
      }
    });
    this.calculateTextareaHeight(e);
  }

  handleFocus(e) {
    let height = this.calculateTextareaHeight(e);
    this.setState({
      isEditing: true,
      style: {
        height: height
      }
    });
  }

  handleBlur(e) {
    if (!this.state.text) {
      this.setState({
        isEditing: false,
        style: {
          height: 35
        }
      });
    }
  }

  render() {

    let {style} = this.state;

    return (
      <form className="form-horizontal">
        <textarea
          style={style}
          className={cx('textarea') + ' form-control'}
          type="text"
          placeholder={this.props.placeholder}
          value={this.state.text}
          onChange={this.handleChange.bind(this)}
          onFocus={this.handleFocus.bind(this)}
          onBlur={this.handleBlur.bind(this)}
        />
        {(()=> {
          if (this.state.isEditing) {
            return <button className="btn btn-primary pull-right" onClick={this.handleSubmit.bind(this)}>save</button>;
          }
        })()}
      </form>
    );
  }

  calculateTextareaHeight(evt) {
    let height = 100;
    if (this.state.text) {
      height = this.state.text.split('\n').length * 20 + 35;
      if (height < 100) {
        height = 100;
      }
    }
    return height;
  }
}

InputBox.propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string
};

export default InputBox;
