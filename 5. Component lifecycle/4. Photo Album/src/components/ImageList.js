import React from "react";
import Image from "./Image";

export default class ImageList extends React.Component {
  // Lifecycle method to prevent re render of the list if some spaces are present
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }
  componentDidMount() {
    this.setState({ images: this.props.images });
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Check if any image URL contains spaces
    for (let i = 0; i < nextState.images.length; i++) {
      if (nextState.images[i].includes(" ")) {
        return false;
      }
    }
    return true;
  }

  render() {
    console.log("imagelist rendering...");

    return (
      <div className="image-list">
        {this.props.images.map((image, index) => {
          return <Image key={index} image={image} />;
          {
            /* return (
            <img
              src={image}
              alt={image}
              height="175px"
              width="100%"
              onError={(e) => (e.target.style.display = "none")}
            />
          ); */
          }
        })}
      </div>
    );
  }
}
