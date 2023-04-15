import React from "react";
import "./styles.css";
import AnimeList from "./AnimeList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animes: [
        {
          name: "One Piece",
          image:
            "https://image.tmdb.org/t/p/original/4Mt7WHox67uJ1yErwTBFcV8KWgG.jpg",
        },
        {
          name: "Demon Slayer",
          image:
            "https://image.tmdb.org/t/p/original/nTvM4mhqNlHIvUkI1gVnW6XP7GG.jpg",
        },
        {
          name: "Full Metal Alchemist",
          image:
            "https://image.tmdb.org/t/p/original/2UG177tWHy7xRmMKWJHB7nAUmKd.jpg",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>Animepedia</h1>
        {/* Code here */}
        <AnimeList data={this.state.animes} />
      </div>
    );
  }
}

export default App;
