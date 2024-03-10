import { render } from "../render";
import SortList from "../view/sortList";
import Filters from "../view/filters";
import FilmList from "../view/filmList";
import FilmCard from "../view/filmCard";
import ShowMoreButton from "../view/showMoreButton";
import Popup from "../view/popup";

export default class FilmPresenter {
  filtersComponent = new Filters();
  sortListComponent = new SortList();
  filmListComponent = new FilmList();
  showMoreButton = new ShowMoreButton();

  init = (container, filmsModel, commentsModel) => {
    this.container = container;
    this.filmsModel = filmsModel;
    this.commentsModel = commentsModel;

    this.films = [...filmsModel.get()];

    render(this.filtersComponent, this.container);
    render(this.sortListComponent, this.container);
    render(this.filmListComponent, this.container);

    for (let i = 0; i < this.films.length; i++) {
      render(new FilmCard(this.films[i]), this.filmListComponent.getElement());
    }

    render(this.showMoreButton, this.filmListComponent.getElement());

    this.comments = [...commentsModel.get(this.films[0])];

    render(new Popup(this.films[0], this.comments), this.container);
  };
}
