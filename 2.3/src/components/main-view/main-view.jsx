import React from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          Title: "Inception",
          Description: `Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people's dreams and steal their secrets from their subconscious. His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves. Cobb gets a chance at redemption when he is offered a seemingly impossible task: Plant an idea in someone's mind. If he succeeds, it will be the perfect crime, but a dangerous enemy anticipates Cobb's every move.`,
          ImagePath: "https://m.media-amazon.com/images/I/51GNRpBt30L.jpg",
        },
        {
          Title: "The Shawshank Redemption",
          Description: `Andy Dufresne (Tim Robbins) is sentenced to two consecutive life terms in prison 
         for the murders of his wife and her lover and is sentenced to a tough prison. 
         However, only Andy knows he didn't commit the crimes. While there, he forms a friendship 
         with Red (Morgan Freeman), experiences brutality of prison life, adapts, helps the warden,
          etc., all in 19 years.`,
          ImagePath: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
        },
        {
          Title: "Gladiator",
          Description: `Set in Roman times, the story of a once-powerful general forced to become a common gladiator. The emperor's son is enraged when he is passed over as heir in favour of his father's favourite general. He kills his father and arranges the murder of the general's family, and the general is sold into slavery to be trained as a gladiator - but his subsequent popularity in the arena threatens the throne.`,
          ImagePath: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRuhegCaGHfcQc-Owpib9vGSO0hUlSUMTojO2s4ih8oXqHBw2ks",
        },
      ],
      selectedMovie: null,
    };
  }

  setMovieSelected(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  render() {
    const { movies, selectedMovie } = this.state;

    if (movies.length === 0)
      return <div className="main-view">This list is empty!</div>;
    return (
      <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} OnClickBack={newSelectedMovie => { this.setMovieSelected(newSelectedMovie); }}/>
          : movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} onMovieClick={(movie) => { this.setMovieSelected(movie) }}/>
          ))
        }
      </div>
    );
  }
}

export default MainView;
