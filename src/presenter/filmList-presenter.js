import { render } from "../framework/render";
import SortList from "../view/sortList";
import Filters from "../view/filters";
import FilmList from "../view/filmList";
import ShowMoreButton from "../view/showMoreButton";
import UserRank from "../view/userRank";
import FooterStat from "../view/footerStat";
import FilmPresenter from "./film-presenter";

export default class FilmListPresenter {
  #sortListComponent = new SortList();
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

    this.#renderUserStat(filmsModel);
    this.#renderFooterStat(filmsModel);
    this.#renderFilters(filmsModel);
    render(this.#sortListComponent, this.#container);
    this.#renderFilmList();
  };

  #renderFilters = (films) => {
    const filtersComponent = new Filters(films);
    render(filtersComponent, this.#container);
  };

  #renderUserStat = (films) => {
    const userRankComponent = new UserRank(films);
    render(userRankComponent, document.querySelector(".header"));
  };

  #renderFooterStat = (films) => {
    const footerStatComponent = new FooterStat(films);
    render(footerStatComponent, document.querySelector(".footer__statistics"));
  };

  #renderFilmList = () => {
    const filmListComponent = new FilmList(this.#films.length);
    render(filmListComponent, this.#container);

    const filmsToRender = this.#films.slice(0, 5);
    filmsToRender.forEach((film) => {
      this.#renderFilm(film);
    });

    if (this.#films.length > 5) {
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
      render(this.#showMoreButton, filmListComponent.element, "afterend");
      this.#showMoreButton.setClickHandler(showMore);
    }
  };

  #renderFilm = (film) => {
    const filmPresenter = new FilmPresenter();
    const filmList = document.querySelector(".films");
    filmPresenter.init(filmList, film, this.#commentsModel);
  };
}
