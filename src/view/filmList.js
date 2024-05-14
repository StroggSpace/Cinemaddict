import AbstractView from "../framework/view/abstract-view";

const createFilmList = (filmsCount) => `<section class="films">
<section class="films-list">
 ${
   !filmsCount
     ? `<h2 class="films-list__title">There are no movies in our database</h2>`
     : ""
 }
</section>
</section>`;
export default class FilmList extends AbstractView {
  #filmsCount = null;
  get template() {
    return createFilmList(this.#filmsCount);
  }

  constructor(filmsCount) {
    super();
    this.#filmsCount = filmsCount;
  }
}
