import { Component } from "react";
import AnimeCard from "./AnimeCard";

// Complete the AnimeList Component
class AnimeList extends Component {
  render() {
    return (
      <div className="anime-list">
        {this.props.data.map((item, index) => (
          <AnimeCard item={item} key={index} />
        ))}
      </div>
    );
  }
}

export default AnimeList;
