import { getRandomNumber, generateRandomDate } from "../util";
import { DIRECTORS, DESCRIPTIONS, COMMENT_EMOTION } from "../const";

const commentsData = () => ({
  author: `${DIRECTORS[getRandomNumber(0, 5)]}`,
  comment: `${DESCRIPTIONS[getRandomNumber(0, 6)]}`,
  date: generateRandomDate(new Date(2023, 12, 1), new Date()),
  emotion: `${COMMENT_EMOTION[getRandomNumber(0, 3)]}`,
});

const getCommentCount = (films) =>
  films.reduce((count, film) => count + film.comments.length, 0);

export const generateComments = (films) => {
  const commentCount = getCommentCount(films);

  return Array.from({ length: commentCount }, (_value, index) => {
    const commentItem = commentsData();

    return {
      id: String(index + 1),
      ...commentItem,
    };
  });
};
