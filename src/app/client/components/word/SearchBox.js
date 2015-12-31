import React, { Component, PropTypes } from 'react';
import styles from './styles';

class SearchBox extends Component {

  constructor(props, context){
    super(props, context);
    this.state = {
      text: this.props.text || ''
    };
  }

  handleSubmit(e) {
    const text = e.target.value.trim();
    if(e.which===13){
      this.props.onSearch(text);
      console.log('submit: ' + text );
    }
  }

  handleChange(e) {
    console.log('change: ' + e);
    this.setState({ text: e.target.value });
  }

  handleBlur(e) {
    console.log('blur: ' + e);
    this.props.onSearch(e.target.value);
  }
  render() {
    return (
      <input
        className={styles['form-control']}
        type="text"
        placeholder={this.props.placeholder}
        autoFocus="true"
        value={this.state.text}
        onBlur={this.handleBlur.bind(this)}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)}
      />
    );
  }
}

SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string
};

export default SearchBox;