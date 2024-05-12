import { generateComments } from "../mocks/commentsData";

export default class CommentsModel {
  #filmsModel = null;
  #allComments = null;
  #comments = null;

  constructor(filmsModel) {
    this.#filmsModel = filmsModel;
    this.generateAllComments();
  }

  generateAllComments() {
    this.#allComments = generateComments(this.#filmsModel.films);
  }

  get = (film) => {
    this.#comments = film.comments.map((commentId) =>
      this.#allComments.find((comment) => comment.id == commentId)
    );

    return this.#comments;
  };
}
