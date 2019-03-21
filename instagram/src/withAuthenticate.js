import React, { Component } from "react";

const withAuthenticate = Component1 => Component2 => {
  return class extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return <Component />;
    }
  };
};
     
export default withAuthenticate;
