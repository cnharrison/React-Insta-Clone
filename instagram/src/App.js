import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = { posts: [], searchInput: "" };
  }

  componentDidMount = () => {
    this.setState({ posts: dummyData });
  };

  inputHandler = event => {
    this.setState({ searchInput: event.target.value });
  };

  render() {
    let filteredPosts = this.state.posts.filter(post => {
      return post.username.indexOf(this.state.searchInput) !== -1;
    });

    return (
      <div className="App">
        <SearchBar posts={this.state.posts} inputHandler={this.inputHandler} />
        <h1>Instagram</h1>
        {filteredPosts.map((post, index) => (
          <PostContainer post={post} key={index} postIndex={index} />
        ))}
      </div>
    );
  }
}

export default App;
