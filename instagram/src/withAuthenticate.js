import React, { Component } from "react";

const withAuthenticate = Component1 => Component2 => {
  return class extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      const credsExist = localStorage.getItem("password");
      return (
        <div className="ternary">
          {credsExist === null ? <Component1 /> : <Component2 />}
        </div>
      );
    }
  };
};

export default withAuthenticate;
