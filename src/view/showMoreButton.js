import AbstractView from "../framework/view/abstract-view";
const createShowMoreButton = () =>
  '<button class="films-list__show-more">Show more</button>';
export default class ShowMoreButton extends AbstractView {
  get template() {
    return createShowMoreButton();
  }

  setClickHandler = (callback) => {
    this._callback.click = callback;
    this.element.addEventListener("click", this.#clickHandler);
  };

  #clickHandler = (evt) => {
    evt.preventDefault();
    this._callback.click();
  };
}
