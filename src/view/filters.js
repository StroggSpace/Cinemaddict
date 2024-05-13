import AbstractView from "../framework/view/abstract-view";
import { generateFilter } from "../mocks/filter";
const createFilters = (filmList) => {
  const filters = generateFilter(filmList.films);

  return `
    <nav class="main-navigation">
      ${filters
        .map((filter) => {
          const capitalizedName =
            filter.name.charAt(0).toUpperCase() + filter.name.slice(1);
          return filter.name === "all"
            ? `<a href="#${filter.name}" class="main-navigation__item main-navigation__item--active">${capitalizedName} movies</a>`
            : `<a href="#${filter.name}" class="main-navigation__item">${capitalizedName} <span class="main-navigation__item-count">${filter.count}</span></a>`;
        })
        .join("")}
    </nav>
  `;
};

export default class Filters extends AbstractView {
  #filmsList = null;
  get template() {
    return createFilters(this.#filmsList);
  }

  constructor(filmsList) {
    super();
    this.#filmsList = filmsList;
  }
}
