import FilmPresenter from "./presenter/films-presenter";

const siteMainElement = document.querySelector(".main");

const filmsPresenter = new FilmPresenter();

filmsPresenter.init(siteMainElement);
