import React, { Component, PropTypes } from 'react';
import styles from './styles';

class SearchBox extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      query: this.props.query || ''
    };
  }

  componentWillReceiveProps(nextProps, nextState) {
    this.setState({query: this.props.query || ''});
  }

  handleSubmit(e) {
    const query = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSearch(query);
      this.context.history.pushState(null, '/dictionary', {query: query});
      console.log('submit: ' + query);
    }
  }

  handleChange(e) {
    this.setState({query: e.target.value});
  }

  render() {
    return (
      <input
        className="form-control"
        type="text"
        placeholder={this.props.placeholder}
        autoFocus="true"
        value={this.state.query}
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

SearchBox.contextTypes = {
  history: PropTypes.object.isRequired
};

export default SearchBox;