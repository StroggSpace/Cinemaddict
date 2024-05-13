import AbstractView from "../framework/view/abstract-view";
const createFooterStat = (filmsList) => {
  return `<section class="footer__statistics"><p>${filmsList.films.length} movies inside</p></section>`;
};
export default class FooterStat extends AbstractView {
  #filmsList = null;
  get template() {
    return createFooterStat(this.#filmsList);
  }

  constructor(filmsList) {
    super();
    this.#filmsList = filmsList;
  }
}
