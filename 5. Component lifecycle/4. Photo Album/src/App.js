import React from "react";
import ImageList from "./components/ImageList";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
      imageUrl: "",
    };
    this.addImageToLS = this.addImageToLS.bind(this);
    this.getImagesFromLS = this.getImagesFromLS.bind(this);
  }

  // Function to add image to local storage
  addImageToLS = () => {
    localStorage.setItem(
      "images",
      JSON.stringify([...this.state.images, this.state.imageUrl])
    );
  };

  // Function to get images from the local storage
  getImagesFromLS = () => {
    const images = localStorage.getItem("images");
    if (!images) {
      localStorage.setItem("images", []);
      return [];
    }
    return JSON.parse(images);
  };

  onAddImage = (e) => {
    e.preventDefault();
    if (this.state.imageUrl.includes(" ") || this.state.imageUrl.length < 5) {
      return;
    }
    this.setState({ images: [...this.state.images, this.state.imageUrl] });
    this.addImageToLS();
    console.log(this.state.images);
  };

  // Create function to set image url
  handleUrl = (e) => {
    var url = e.target.value;

    this.state.imageUrl = e.target.value;
  };

  // Use appropriate lifecycle method to get images
  componentDidMount = () => {
    const imagesFromLS = this.getImagesFromLS();
    this.setState({ images: imagesFromLS });
    this.forceUpdate();
    setTimeout(() => {
      console.log(this.state.images);
    }, 500);
  };

  render() {
    return (
      <>
        <form onSubmit={this.onAddImage}>
          <input
            type="text"
            placeholder="Image URL"
            name="imageUrl"
            // value={this.state.imageUrl}
            onChange={this.handleUrl}
          />
          <button>Add Image</button>
        </form>
        <ImageList images={this.state.images} />
      </>
    );
  }
}
