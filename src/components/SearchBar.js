import React from "react";

export default class SearchBar extends React.Component {
  state = { query: "" };
  submit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <form
        onSubmit={this.submit}
        className="ui action input"
        style={{ width: "100%" }}
      >
        <input
          onChange={(e) => this.setState({ query: e.target.value })}
          type="text"
          placeholder="Search..."
        />

        <button onClick={this.submit} type="submit" className="ui button">
          Search
        </button>
      </form>
    );
  }
}
