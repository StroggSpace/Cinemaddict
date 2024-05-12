import { getRandomNumber, generateRandomDate } from "../util";
import {
  FILM_COUNT,
  FILM_TITLE,
  ALTERNATIVE_TITLE,
  DIRECTORS,
  WRITERS,
  ACTORS,
  COUNTRIES,
  GENRE_LISTS,
  DESCRIPTIONS,
  BOOLEAN,
  POSTERS,
} from "../const";

const getFilmInfo = () => ({
  title: FILM_TITLE[getRandomNumber(0, 6)],
  alternativeTitle: ALTERNATIVE_TITLE[getRandomNumber(0, 6)],
  totalRating: getRandomNumber(1, 10),
  poster: `./images/posters/${POSTERS[getRandomNumber(0, 6)]}`,
  ageRating: getRandomNumber(0, 60),
  director: DIRECTORS[getRandomNumber(0, 5)],
  writers: WRITERS[getRandomNumber(0, 5)],
  actors: ACTORS[getRandomNumber(0, 6)],
  release: getRelease(),
  runtime: getRandomNumber(10, 300),
  genre: GENRE_LISTS[getRandomNumber(0, 6)],
  description: DESCRIPTIONS[getRandomNumber(0, 6)],
});

const getUserDetails = () => ({
  watchlist: BOOLEAN[getRandomNumber(0, 1)],
  alreadyWatched: BOOLEAN[getRandomNumber(0, 1)],
  watchingDate: generateRandomDate(new Date(2023, 8, 10), new Date()),
  favorite: BOOLEAN[getRandomNumber(0, 1)],
});

const getRelease = () => ({
  date: generateRandomDate(new Date(2000, 3, 20), new Date()),
  releaseCountry: COUNTRIES[getRandomNumber(0, 6)],
});

export const generateFilms = () => {
  const films = Array.from({ length: FILM_COUNT }, getFilmInfo);

  let totalCommentsCount = 0;

  return films.map((film, index) => {
    const hasComment = BOOLEAN[getRandomNumber(0, 1)];
    const filmCommentsCount = hasComment ? getRandomNumber(1, 10) : 0;

    totalCommentsCount += filmCommentsCount;

    return {
      id: String(index + 1),
      comments: hasComment
        ? Array.from({ length: filmCommentsCount }, (_value, commentIndex) =>
            String(totalCommentsCount - commentIndex)
          )
        : [],
      filmInfo: film,
    };
  });
};
