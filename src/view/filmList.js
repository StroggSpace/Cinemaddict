import AbstractView from "../framework/view/abstract-view";

const createFilmList = () => `<section class="films">
<section class="films-list">
  <h2 class="films-list__title">There are no movies in our database</h2>
</section>
</section>`;
export default class FilmList extends AbstractView {
  get template() {
    return createFilmList();
  }
}
