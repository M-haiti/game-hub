import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';
import APIClient from '../services/api-client';
import { Genre } from "../entities/Genre";
import ms from 'ms';

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () => useQuery({
        queryKey: ['genres'],
        queryFn: apiClient.getAll,
        staleTime: ms('24h'), // this is set to 24 hours
        initialData: genres
})

export default useGenres;