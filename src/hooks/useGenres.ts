import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';
import APIClient from '../services/api-client';
import { Genre } from '../services/genreService';



const apiClient = new APIClient<Genre>('/genres');

const useGenres = () => useQuery({
        queryKey: ['genres'],
        queryFn: apiClient.getAll,
        staleTime: 1000 * 60 * 60 * 24, // this si set to 24 hours
        initialData: { count: genres.length, results: genres },
})

export default useGenres;