import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <h1>Hoody Hoo</h1>
        {dummyData.map((post, index) => (
          <PostContainer post={post} key={index} />
        ))}
      </div>
    );
  }
}

export default App;
