import { createElement } from "../render";

const createFilmList = () => `<section class="films">
<section class="films-list">
  <h2 class="films-list__title">There are no movies in our database</h2>
</section>
</section>`;
export default class FilmList {
  #element = null;

  get template() {
    return createFilmList();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
