import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchBar extends Component {
  render() {
    return (
      <form
        className="SearchBar"
        onSubmit={e => {
          e.preventDefault();
          this.props.handleSubmit();
        }}
      >
        <input
          type="text"
          value={this.props.input}
          onChange={e => this.props.handleUpdateInputValue(e.target.value)}
          placeholder={this.props.placeholder}
        />
        <input type="submit" value="Search" />
      </form>
    );
  }
}
SearchBar.propTypes = {
  handleUpdateInputValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  input: PropTypes.string
};

export default SearchBar;
