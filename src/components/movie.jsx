import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './movie.css';

function Movie({ id, year, title, summary, poster, genres, background }) {
  return (
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: {
          year,
          title,
          summary,
          poster,
          genres,
          background,
        },
      }}
    >
      <li>
        <img className="poster" src={poster} alt={title} title={title} />
      </li>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
