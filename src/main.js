import FilmListPresenter from "./presenter/filmList-presenter";
import FilmsModel from "./model/films";
import CommentsModel from "./model/comments";

const siteMainElement = document.querySelector(".main");

const filmsModel = new FilmsModel();
const commentsModel = new CommentsModel(filmsModel);

const filmListPresenter = new FilmListPresenter();

filmListPresenter.init(siteMainElement, filmsModel, commentsModel);
