import { Component } from "react";

class Person extends Component {
  constructor(props) {
    super(props);
    this.alertMsg = this.alertMsg.bind(this);
  }

  alertMsg = (index) => {
    if (this.props.person.id == index) {
      alert(
        "The person with email " +
          this.props.person.email +
          " was removed from the network."
      );
    }
  };

  render() {
    const { id, img, email, show } = this.props.person;
    return (
      show && (
        <div className="person" id={this.props.index}>
          <b
            onClick={() => {
              this.props.removePerson(this.props.index);
              this.alertMsg(this.props.index);
            }}
          >
            X
          </b>
          <img alt={email} src={img} />
          <p>{email}</p>
        </div>
      )
    );
  }
}

export default Person;
