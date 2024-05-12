import { createElement } from "../render";

const createShowMoreButton = () =>
  '<button class="films-list__show-more">Show more</button>';
export default class ShowMoreButton {
  #element = null;
  get template() {
    return createShowMoreButton();
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
