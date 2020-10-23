import React, { Component } from 'react';

import './film-details.css';
import Spinner from "../spinner/spinner";
import SwapiService from "../../services/swapi-service";

export default class FilmDetails extends Component {

  swapiService = new SwapiService();

  state = {
    film: null,
    loading: false
  };

  componentDidMount() {
    this.updateFilm();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filmId !== prevProps.filmId) {
      this.updateFilm();
    }
  }

  onfilmLoaded = (film) => {
    this.setState({
      film,
      loading: false,
    });
  };

  updateFilm() {
    const { filmId } = this.props;
    if (!filmId) {
      return;
    }
    this.setState({
      loading: true
    })
    this.swapiService
      .getFilm(filmId)
      .then(this.onfilmLoaded);
  }

  render() {

    const { film, loading } = this.state;
    if (!film) {
      return <span>Select a film from a list</span>;
    }

    const { id, title, openingCrawl,
      director, producer, releaseDate } = film;

    if (loading) {
      return <Spinner />;
    }
    return (
      <div className="film-details">
        <div className="film-card">
          <img className="film-image"
            src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`}
            alt="character"/>

          <div className="card-body">
            <h4>{title}</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span>{openingCrawl}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Director:</span>
                <span>{director}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Producers:</span>
                <span>{producer}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Release Date:</span>
                <span>{releaseDate}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
