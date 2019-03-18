import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = { posts: [] };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <h1>Instagram</h1>
        {this.state.posts.map((post, index) => (
          <PostContainer post={post} key={index} postIndex={index} />
        ))}
      </div>
    );
  }
}

export default App;
