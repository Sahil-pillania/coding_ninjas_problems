import React from "react";

export default class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Coding Ninjas",
      curIndex: 0,
      currentName: "",
      interval: null,
    };
    this.typeWriterEffect = this.typeWriterEffect.bind(this);
  }
  // This function adds a character to the string.
  typeWriterEffect = () => {
    if (this.state.currentName === this.state.fullName) {
      clearInterval(this.state.interval);
    }
    if (this.props.showName == true) {
      this.setState((prevState) => {
        return {
          curIndex: prevState.curIndex + 1,
          currentName: prevState.fullName.substring(0, prevState.curIndex),
        };
      });
    }
  };

  // Required lifecycle methods here
  componentDidMount() {
    this.state.interval = setInterval(() => {
      this.typeWriterEffect();
    }, 500);
  }

  render() {
    return <h1>{this.state.currentName}</h1>;
  }
}
