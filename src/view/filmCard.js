import { formatTime } from "../util";
import AbstractView from "../framework/view/abstract-view";

const createFilmCard = ({ filmInfo, comments, userDetails }) => {
  const { title, totalRating, release, runtime, genre, poster, description } =
    filmInfo;
  const { alreadyWatched, favorite, watchlist } = userDetails;
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
            <button class="film-card__controls-item film-card__controls-item--add-to-watchlist  ${
              watchlist && `film-card__controls-item--active`
            }" type="button">Add to watchlist</button>
            <button class="film-card__controls-item film-card__controls-item--mark-as-watched ${
              alreadyWatched && `film-card__controls-item--active`
            }" type="button">Mark as watched</button>
            <button class="film-card__controls-item film-card__controls-item--favorite ${
              favorite && `film-card__controls-item--active`
            }" type="button">Mark as favorite</button>
          </div>
        </article>
`;
};
export default class FilmCard extends AbstractView {
  #film = null;

  constructor(film) {
    super();
    this.#film = film;
  }
  get template() {
    return createFilmCard({ ...this.#film });
  }

  setClickHandler = (callback) => {
    this._callback.click = callback;
    this.element
      .querySelector(".film-card__link")
      .addEventListener("click", this.#clickHandler);
  };

  #clickHandler = (evt) => {
    evt.preventDefault();
    this._callback.click();
  };

  setToggleFilter = (callback) => {
    this._callback.toggle = callback;
    this.element
      .querySelector(".film-card__controls")
      .addEventListener("click", this.#toggleHandler);
  };

  #toggleHandler = (evt) => {
    evt.preventDefault();
    this._callback.toggle(evt);
  };
}
