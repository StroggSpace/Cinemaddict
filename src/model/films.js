import { generateFilms } from "../mocks/filmsData.js";

export default class FilmsModel {
  films = generateFilms();

  get = () => this.films;
}
