import FilmPresenter from "./presenter/films-presenter";
import FilmsModel from "./model/films";
import CommentsModel from "./model/comments";

import { render } from "./framework/render";

const siteMainElement = document.querySelector(".main");

const filmsModel = new FilmsModel();
const commentsModel = new CommentsModel(filmsModel);

const filmsPresenter = new FilmPresenter();

filmsPresenter.init(siteMainElement, filmsModel, commentsModel);
