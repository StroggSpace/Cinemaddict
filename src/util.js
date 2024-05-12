//Генератор псевдослучайных чисел в диапазоне от min до max

export function getRandomNumber(min, max) {
  if (min < 0 || max < 0 || isNaN(min) || isNaN(max)) {
    return "Пожалуйста, введите допустимые положительные целые числа для min и max";
  }

  min = min > max ? [max, (max = min)][0] : min;
  max = max < min ? [min, (min = max)][0] : max;

  let result = Math.round(min - 0.5 + Math.random() * (max - min + 1));
  result = result < min ? min : result > max ? max : result;

  return result;
}

// Генерация рандомной даты

export function generateRandomDate(from, to) {
  return new Date(
    from.getTime() + Math.random() * (to.getTime() - from.getTime())
  );
}

export function formatTime(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}m`;
}

export function formatDate(date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

export function commentDate(date) {
  const now = new Date();
  const diff = now - date;
  const oneDay = 24 * 60 * 60 * 1000;

  if (diff < oneDay) {
    return "today";
  } else if (diff < 2 * oneDay) {
    return "yesterday";
  } else if (diff < 7 * oneDay) {
    return `${Math.floor(diff / oneDay)} days ago`;
  } else {
    return `${date.getFullYear()}/${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${date.getDate().toString().padStart(2, "0")}/${date
      .getHours()
      .toString()
      .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
  }
}
