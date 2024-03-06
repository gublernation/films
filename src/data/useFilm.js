import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getFilm } from './apiFilms';

export function useFilm() {
  const params = useParams();

  const { data: film, isLoading } = useQuery({
    queryKey: ['film'],
    queryFn: () => getFilm(params.filmId),
  });

  return { film, isLoading };
}
