import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div className="app">
        <section className="header">
          <a href="https://fontmeme.com/ko/netflix-type/">
            <img
              src="https://fontmeme.com/permalink/210925/55113ed2012da139fbe35b430c3964fc.png"
              alt="netflix-type"
              border="0"
            />
          </a>
        </section>
        <section className="container">
          {isLoading ? (
            <div className="loader"></div>
          ) : (
            <ul className="movies">
              {movies.map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              ))}
            </ul>
          )}
        </section>
      </div>
    );
  }
}

export default App;
