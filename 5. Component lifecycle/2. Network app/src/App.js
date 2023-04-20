import "./styles.css";
import { Component } from "react";
import Person from "./components/Person";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      network: [
        {
          id: 0,
          img: "https://res.cloudinary.com/dl26pbek4/image/upload/v1675071817/pexels-rodnae-productions-7348711_doe69b.jpg",
          email: "john@gmail.com",
          show: true,
        },
        {
          id: 1,
          img: "https://res.cloudinary.com/dl26pbek4/image/upload/v1675071807/pexels-zaid-mohammed-15131063_bysy0s.jpg",
          email: "stephen@gmail.com",
          show: true,
        },
        {
          id: 2,
          img: "https://res.cloudinary.com/dl26pbek4/image/upload/v1675071812/pexels-ali-kazal-14520051_qrdgym.jpg",
          email: "alex@gmail.com",
          show: true,
        },
      ],
    };
    this.removePerson = this.removePerson.bind(this);
  }

  // Create function to remove person from your network here
  removePerson(id) {
    const find = this.state.network.find((net) => net.id == id);

    this.setState((prev) => [prev, (find.show = false)]);
  }

  render() {
    return (
      <div className="App">
        <h1>My Network</h1>
        <div className="list">
          {this.state.network.map((p, i) => (
            <Person
              key={i}
              person={p}
              removePerson={this.removePerson}
              index={i}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
