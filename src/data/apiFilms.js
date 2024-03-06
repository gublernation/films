import { films } from './films';

export function getFilms({ filter }) {
  let filteredValue;

  if (filter === 'year')
    filteredValue = films.sort((a, b) => +a.year - +b.year);

  if (filter === 'alphabetical')
    filteredValue = films.sort((a, b) => a.title.localeCompare(b.title));

  if (filter === 'rating')
    filteredValue = films.sort((a, b) => +b.rating - a.rating);

  return filteredValue;
}

export function getFilm(id) {
  const selectedFilm = films.filter(film => +film.id === +id);

  console.log(selectedFilm);

  return selectedFilm;
}
