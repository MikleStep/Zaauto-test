import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import FilmDetails from '../film-details/film-details';

import './films-page.css';
import SwapiService from "../../services/swapi-service";

export default class FilmsPage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedFilm: 1,
  };

  onFilmSelected = (selectedFilm) => {
    this.setState({ selectedFilm });
  };

  render() {


    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onItemSelected={this.onFilmSelected}
            getData={this.swapiService.getAllFilms}
            renderItem={({ title }) => `${title}`}/>
        </div>
        <div className="col-md-6">
          <FilmDetails filmId={this.state.selectedFilm} />
        </div>
      </div>
    );
  }
}
