import React, { Component } from "react";

function SearchBar(props) {
  return (
    <form>
      <input name="search" value={props.searchItem} placeholder="search" />
    </form>
  );
}

export default SearchBar;
