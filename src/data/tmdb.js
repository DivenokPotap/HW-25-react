import axios from "axios";

const API_KEY = "c384b3c3c1617216db64ef5fa65fafd6";

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
      api_key: API_KEY,
    },
  });

  export const getTrendingMovies = async () => {
    const { data } = await api.get("/trending/movie/day");
    return data.results;
  };

  export const searchMovies = async (query, signal) => {
    const { data } = await api.get("/search/movie", {
      params: { query },
      signal,
    });
  
    return data.results;
  };

  export const getMovieDetails = async (id) => {
    const { data } = await api.get(`/movie/${id}`);
    return data;
  };

  export const getMovieCredits = async (id) => {
    const { data } = await api.get(`/movie/${id}/credits`);
    return data;
  };

  export const getMovieReviews = async (id) => {
    const { data } = await api.get(`/movie/${id}/reviews`);
    return data.results;
  };