import React, { Component, PropTypes } from 'react';
import styles from './styles';

class SearchBox extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      query: this.props.query || ''
    };
  }

  handleSubmit(e) {
    const query = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSearch(query);
      console.log('submit: ' + query);
    }
  }

  handleChange(e) {
    console.log('change: ' + e);
    this.setState({query: e.target.value});
  }

  handleBlur(e) {
    console.log('blur: ' + e);
    this.props.onSearch(e.target.value);
  }

  render() {
    return (
      <input
        className="form-control"
        type="text"
        placeholder={this.props.placeholder}
        autoFocus="true"
        value={this.state.query}
        onBlur={this.handleBlur.bind(this)}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)}
      />
    );
  }
}

SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
  query: PropTypes.string,
  placeholder: PropTypes.string
};

export default SearchBox;