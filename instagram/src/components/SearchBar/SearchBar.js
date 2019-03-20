import React, { Component } from "react";

function SearchBar(props) {
  return (
    <form onSubmit={props.submitHandler}>
      <input
        type="text"
        name="search"
        value={props.searchInput}
        placeholder="search"
        onChange={props.inputHandler}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SearchBar;
