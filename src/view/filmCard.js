import { createElement } from "../render";
import { formatTime } from "../util";

const createFilmCard = ({ filmInfo, comments }) => {
  const { title, totalRating, release, runtime, genre, poster, description } =
    filmInfo;
  return `
<article class="film-card">
          <a class="film-card__link">
            <h3 class="film-card__title">${title}</h3>
            <p class="film-card__rating">${totalRating}</p>
            <p class="film-card__info">
              <span class="film-card__year">${release.date
                .getFullYear()
                .toString()}</span>
              <span class="film-card__duration">${formatTime(runtime)}</span>
              <span class="film-card__genre">${genre.join(" ")}</span>
            </p>
            <img src=${poster} alt="" class="film-card__poster">
            <p class="film-card__description">${description}</p>
            <span class="film-card__comments">${comments.length} comments</span>
          </a>
          <div class="film-card__controls">
            <button class="film-card__controls-item film-card__controls-item--add-to-watchlist film-card__controls-item--active" type="button">Add to watchlist</button>
            <button class="film-card__controls-item film-card__controls-item--mark-as-watched film-card__controls-item--active" type="button">Mark as watched</button>
            <button class="film-card__controls-item film-card__controls-item--favorite film-card__controls-item--active" type="button">Mark as favorite</button>
          </div>
        </article>
`;
};
export default class FilmCard {
  constructor(film) {
    this.film = film;
  }
  getTemplate() {
    return createFilmCard({ ...this.film });
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
