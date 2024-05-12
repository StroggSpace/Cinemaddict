import { createElement } from "../render";

const createLoading = () => '<h2 class="films-list__title">Loading...</h2>';
export default class Loading {
  #element = null;

  get template() {
    return createLoading();
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
