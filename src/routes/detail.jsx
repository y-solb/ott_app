import React, { Component } from 'react';
import './detail.css';

class Detail extends Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
    console.log(location.state);
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <section className="detail">
          <div className="detail_box">
            <div className="detail_top" style={{ backgroundImage: `url("${location.state.background}")` }}>
              <span className="movie__title">{location.state.title}</span>
              <img
                className="movie__poster"
                src={location.state.poster}
                alt={location.state.title}
                title={location.state.title}
              />
            </div>
            <div className="detail_bottom">
              <ul className="genres">
                {location.state.genres.map((genre, index) => (
                  <li key={index} className="genres__genres">
                    {genre}
                  </li>
                ))}
              </ul>
              <p className="movie__year">{location.state.year}</p>
              <p className="movie__summary">{location.state.summary.slice(0, 200)}...</p>
            </div>
          </div>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
