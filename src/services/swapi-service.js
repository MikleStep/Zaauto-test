export default class SwapiService {

  _apiBase = 'https://swapi.dev/api';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };

  getAllFilms = async () => {
    const res = await this.getResource(`/films/`);
    return res.results.map(this._transformFilm);
  };

  getFilm = async (id) => {
    const film = await this.getResource(`/films/${id}/`);
    return this._transformFilm(film);
  };

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  _transformFilm = (film) => {
    return {
      id: this._extractId(film),
      title: film.title,
      openingCrawl: film.opening_crawl,
      director: film.director,
      producer: film.producer,
      releaseDate: film.release_date
    };
  };

}
