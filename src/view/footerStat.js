import { createElement } from "../render";

const createFooterStat = () =>
  '<section class="footer__statistics"><p>0 movies inside</p></section>';
export default class FooterStat {
  #element = null;
  get template() {
    return createFooterStat();
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
