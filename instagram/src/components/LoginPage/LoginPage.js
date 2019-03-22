import React, { Component } from "react";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      loggedIn: false,
      correctLogin: "anonuser",
      correctPassword: "abc123"
    };
  }

  loginInputHandler = event => {
    this.setState({ login: event.target.value });
  };

  passwordInputHandler = event => {
    this.setState({ password: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    if (
      this.state.login === this.state.correctLogin &&
      this.state.password === this.state.correctPassword
    ) {
      localStorage.setItem("username", this.state.login);
      localStorage.setItem("password", this.state.password);
      window.location.reload();
    } else {
      alert("wrong password bro");
    }
  };

  render() {
    return (
      <div className="login">
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="login"
            value={this.state.login}
            placeholder="login"
            onChange={this.loginInputHandler}
          />
          <input
            type="text"
            name="password"
            value={this.state.password}
            placeholder="password"
            onChange={this.passwordInputHandler}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
