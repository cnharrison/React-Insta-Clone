import React, { Component } from "react";
import "./App.css";
import PostsPage from "./components/PostContainer/PostsPage";
import LoginPage from "./components/LoginPage/LoginPage";
import withAuthenticate from "./withAuthenticate";

const ComponentFromWithAuthenticate = withAuthenticate(LoginPage)(PostsPage);

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
        </div>
    );
  }
}

export default App;
