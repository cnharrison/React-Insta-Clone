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

componentDidMount() { 
  localStorage.removeItem("username");
  localStorage.removeItem("password");
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
