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

  loginInputHandler = (event) => {
    this.setState({ login : event.target.value });
  };

  passwordInputHandler = (event) => { 
    this.setState({ password : event.target.value });
  }

  submitHandler = event => {
    if (
      this.state.login === this.state.correctLogin &&
      this.state.pasword === this.state.correctPassword
    ) {
      localStorage.setItem("userName", this.state.login);
      localStorage.setItem("passWord", this.state.password);
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
