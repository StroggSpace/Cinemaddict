import { createElement } from "../render";

const createLoading = () => '<h2 class="films-list__title">Loading...</h2>';
export default class Loading {
  getTemplate() {
    return createLoading();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
