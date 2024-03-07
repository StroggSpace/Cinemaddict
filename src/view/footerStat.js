import { createElement } from "../render";

const createFooterStat = () =>
  '<section class="footer__statistics"><p>0 movies inside</p></section>';
export default class FooterStat {
  getTemplate() {
    return createFooterStat();
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
