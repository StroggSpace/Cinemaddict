import AbstractView from "../framework/view/abstract-view";
import { getUserRank } from "../util";
const createUserRank = (filmsList) => {
  return `<section class="header__profile profile">
<p class="profile__rating">${getUserRank(filmsList.films)}</p>
<img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">

</section>`;
};

export default class UserRank extends AbstractView {
  #filmsList = null;
  get template() {
    return createUserRank(this.#filmsList);
  }

  constructor(filmsList) {
    super();
    this.#filmsList = filmsList;
  }
}
