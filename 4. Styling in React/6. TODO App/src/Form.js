import { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.handleText = this.handleText.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  handleText = () => {
  
    this.props.add(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <div className="form">
        <input
          onChange={this.handleChange}
          value={this.state.text}
          placeholder="Whats on your mind?"
          required
        />
        <button onClick={() => this.handleText()}>Add</button>
      </div>
    );
  }
}
