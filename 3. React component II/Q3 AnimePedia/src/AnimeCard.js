import { Component } from "react";

// Complete the AnimeCard Component
class AnimeCard extends Component {
  render() {
    const { name, image } = this.props.item;
    return (
      <div className="anime-card">
        <img src={image} alt="" />
        <p>{name}</p>
      </div>
    );
  }
}

export default AnimeCard;
