import { useQuery } from '@tanstack/react-query';
import { getFilms } from './apiFilms';
import { useSearchParams } from 'react-router-dom';

export function useFilms() {
  const [searchParams] = useSearchParams();

  const filter = searchParams.get('filter') || 'year';

  const { data: films, isLoading } = useQuery({
    queryKey: ['films', filter],
    queryFn: () => getFilms({ filter }),
  });

  return { films, isLoading };
}
