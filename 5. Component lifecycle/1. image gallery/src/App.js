import "./styles.css";
import React from "react";
import Image from "./components/Image";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: false,
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          photos: json,
          loading: true,
        });
      });
  }

  // Use the required lifecycle methods here

  render() {
    // Display loading status here
    const { loading } = this.state;
    if (!loading) {
      return (
        <div>
          <h1> Loading... </h1>
        </div>
      );
    }
    return (
      <div className="App">
        {this.state.photos.map((photo) => {
          return <Image key={photo.id} photo={photo} />;
        })}
      </div>
    );
  }
}
