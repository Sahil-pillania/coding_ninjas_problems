import { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <>
        <p className="name">
          <span>Name: </span> Pranav Sharad Yeole
        </p>
        <p className="email">
          <span>Email: </span> pranav@google.com
        </p>
        <p className="phone">
          <span>Phone: </span> 8546465544
        </p>
        <p className="address">
          <span>Address: </span>ABC, xyz street.
        </p>
      </>
    );
  }
}

export default Hero;
