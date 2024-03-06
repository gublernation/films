import styled from 'styled-components';

// import { films } from '../data/films';

import FilmItem from './FilmItem';
import { useFilms } from '../data/useFilms';
import Filter from '../ui/Filter';

const StyledFilmList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 36px;
  justify-items: center;

  @media only screen and (max-width: 1500px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: 1 / -1;
  margin-right: auto;
`;

const Summary = styled.div`
  font-size: var(--font-size-xl);
  font-weight: 700;
  text-align: left;
`;

function FilmList() {
  const { films, isLoading } = useFilms();

  if (isLoading) return null;

  return (
    <StyledFilmList>
      <Header>
        <Summary>총 {films.length}개의 결과</Summary>
      </Header>
      {films.map(film => (
        <FilmItem key={film.id} film={film} />
      ))}
    </StyledFilmList>
  );
}

export default FilmList;
