import { render } from "../framework/render";
import SortList from "../view/sortList";
import Filters from "../view/filters";
import FilmList from "../view/filmList";
import FilmCard from "../view/filmCard";
import ShowMoreButton from "../view/showMoreButton";
import Popup from "../view/popup";

export default class FilmPresenter {
  #filtersComponent = new Filters();
  #sortListComponent = new SortList();
  #filmListComponent = new FilmList();
  #showMoreButton = new ShowMoreButton();

  #container = null;
  #filmsModel = null;
  #films = null;
  #commentsModel = [];

  init = (container, filmsModel, commentsModel) => {
    this.#container = container;
    this.#filmsModel = filmsModel;
    this.#commentsModel = commentsModel;
    this.#films = [...this.#filmsModel.films];

    render(this.#filtersComponent, this.#container);
    render(this.#sortListComponent, this.#container);
    render(this.#filmListComponent, this.#container);

    this.#renderFilmList();
  };

  #renderFilmList = () => {
    const filmsToRender = this.#films.slice(0, 5);
    filmsToRender.forEach((film) => {
      this.#renderFilm(film);
    });

    if (this.#films.length > 5) {
      render(this.#showMoreButton, this.#filmListComponent.element);

      let startIndex = 5;
      let endIndex = Math.min(10, this.#films.length);

      const showMore = () => {
        const filmsToRender = this.#films.slice(startIndex, endIndex);
        filmsToRender.forEach((film) => {
          this.#renderFilm(film);
        });

        startIndex = endIndex;
        endIndex = Math.min(endIndex + 5, this.#films.length);

        if (startIndex >= this.#films.length) {
          this.#showMoreButton.element.remove();
          this.#showMoreButton.removeElement();
        }
      };

      this.#showMoreButton.setClickHandler(showMore);
    }
  };

  #renderFilm = (film) => {
    const filmComponent = new FilmCard(film);
    const filmComments = [...this.#commentsModel.get(film)];

    const closeHandler = () => {
      removePopup();
    };

    const keyHandler = (event) => {
      if (event.key === "Escape" || "Esc") {
        removePopup();
      }
    };

    const openPopup = () => {
      const popup = new Popup(film, filmComments);
      document.body.appendChild(popup.element);

      popup.setClickHandler(closeHandler);
      document.addEventListener("keydown", keyHandler);
      document.body.classList.add("hide-overflow");
    };

    const removePopup = () => {
      const closeBtn = document.querySelector(".film-details__close");
      closeBtn.removeEventListener("click", closeHandler);
      document.removeEventListener("keydown", keyHandler);
      document.querySelector(".film-details").remove();
      document.body.classList.remove("hide-overflow");
    };

    filmComponent.setClickHandler(() => {
      const popup = document.querySelector(".film-details");

      if (!popup) {
        openPopup();
      }
    });

    render(filmComponent, this.#filmListComponent.element);
  };
}
