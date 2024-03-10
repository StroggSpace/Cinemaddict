import { generateComments } from "../mocks/commentsData";

export default class CommentsModel {
  filmsModel = null;
  allComments = [];
  comments = [];

  constructor(filmsModel) {
    this.filmsModel = filmsModel;
    this.generateAllComments();
  }

  generateAllComments() {
    this.allComments = generateComments(this.filmsModel.get());
  }

  get = (filmsModel) => {
    this.comments = filmsModel.comments.map((commentId) =>
      this.allComments.find((comment) => comment.id == commentId)
    );

    return this.comments;
  };
}
