import Popup from "../view/popup";
import FilmCard from "../view/filmCard";
import { render } from "../framework/render";

export default class FilmPresenter {
  init = (container, film, commentsModel) => {
    const filmComponent = new FilmCard(film);
    const filmComments = [...commentsModel.get(film)];
    console.log(film);

    const closeHandler = () => {
      removePopup();
    };

    const keyHandler = (event) => {
      if (event.key === "Escape" || "Esc") {
        removePopup();
      }
    };

    // TODO: разобраться с отрисовкой и изменением данных

    const toggleFilter = (event) => {
      if (
        event.target.classList.contains(
          "film-card__controls-item--add-to-watchlist"
        )
      ) {
        console.log(film.userDetails.watchlist);
      }
    };

    const openPopup = () => {
      const popup = new Popup(film, filmComments);
      document.body.appendChild(popup.element);

      popup.setClickHandler(closeHandler);
      document.addEventListener("keydown", keyHandler);
      document.body.classList.add("hide-overflow");
    };

    const removePopup = () => {
      const closeBtn = document.querySelector(".film-details__close");
      closeBtn.removeEventListener("click", closeHandler);
      document.removeEventListener("keydown", keyHandler);
      document.querySelector(".film-details").remove();
      document.body.classList.remove("hide-overflow");
    };

    filmComponent.setClickHandler(() => {
      const popup = document.querySelector(".film-details");

      if (!popup) {
        openPopup();
      }
    });
    filmComponent.setToggleFilter(toggleFilter);

    render(filmComponent, container);
  };
}
