import AbstractView from "../framework/view/abstract-view";
const createFooterStat = () =>
  '<section class="footer__statistics"><p>0 movies inside</p></section>';
export default class FooterStat extends AbstractView {
  get template() {
    return createFooterStat();
  }
}
