import React, { Component } from "react";
import "./App.css";
import PostsPage from "./components/PostContainer/PostsPage";
import withAuthenticate from "./withAuthenticate";

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="PostsPage">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App;
