import { render } from "../render";
import SortList from "../view/sortList";
import Filters from "../view/filters";
import FilmList from "../view/filmList";
import FilmCard from "../view/filmCard";
import ShowMoreButton from "../view/showMoreButton";
// import DetailsPopup from "../view/popup/detailsPopup";
// import PopupComments from "../view/popup/popupComments";
import { FILM_COUNT } from "../const";

export default class FilmPresenter {
  filtersComponent = new Filters();
  sortListComponent = new SortList();
  filmListComponent = new FilmList();
  showMoreButton = new ShowMoreButton();

  init = (container) => {
    this.container = container;

    render(this.filtersComponent, this.container);
    render(this.sortListComponent, this.container);
    render(this.filmListComponent, this.container);

    for (let i = 0; i < FILM_COUNT; i++) {
      render(new FilmCard(), this.filmListComponent.getElement());
    }

    render(this.showMoreButton, this.filmListComponent.getElement());
  };
}
