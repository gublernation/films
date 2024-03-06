import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Star from '../svg/Star';

const StyledFilmItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const PosterWrap = styled(Link)`
  width: 100%;
  display: block;
  position: relative;
  aspect-ratio: 2 / 3;
  border-radius: 12px;
  transition: outline-color var(--transition);
  overflow: hidden;

  outline-offset: 5px;
  outline: 3px solid transparent;

  &:hover {
    outline-color: var(--color-black-150);
  }

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.25);
    transition: opacity var(--transition);
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const Poster = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

const EmptyPoster = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size-sm);
  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  aspect-ratio: 2 / 3;
  border-radius: 12px;
  background-color: var(--color-black-750);
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

const FilmTitle = styled.h2`
  display: -webkit-box;
  font-weight: 500;
  text-overflow: ellipsis;
  line-height: var(--line-h-md);
  line-clamp: 1;
  -webkit-line-clamp: 1;
  word-break: break-all;
  white-space: pre-wrap;
  -webkit-box-orient: vertical;
  transition: all var(--transition);
  overflow: hidden;

  & > a:hover,
  & > a:active {
    text-decoration: underline;
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;

  & > p {
    font-size: var(--font-size-sm);
  }
`;

export default function FilmItem({ film }) {
  const { id, title, poster, rating } = film;

  return (
    <StyledFilmItem>
      <PosterWrap to={`/${id}`}>
        {poster && <Poster src={`/${poster}`} />}
        {!poster && <EmptyPoster>no image</EmptyPoster>}
      </PosterWrap>
      <TitleWrap>
        <FilmTitle>
          <Link to={`/${id}`}>{title}</Link>
        </FilmTitle>
        <Rating>
          <Star size="14" />
          <p>{rating}</p>
        </Rating>
      </TitleWrap>
    </StyledFilmItem>
  );
}
