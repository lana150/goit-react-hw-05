import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmQzMmRkNTZiMjQ4Zjc0ODFhOTJmY2M2OTJhNGY2OSIsIm5iZiI6MTczNzMzNDU4My4yMjMsInN1YiI6IjY3OGQ5ZjM3NDJmMjdjNzU0YzY1MzE1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YZiCkPUpRgxffqvZ7SWhURnv4Hwb-eMwJOzar7s4F_0";
const BASE_URL = "https://api.themoviedb.org/3";
const AUTH_HEADER = { Authorization: `Bearer ${API_KEY}` };

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
    headers: AUTH_HEADER,
  });
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie?query=${query}`, {
    headers: AUTH_HEADER,
  });
  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    headers: AUTH_HEADER,
  });
  return response.data;
};

export const fetchMovieCast = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
    headers: AUTH_HEADER,
  });
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
    headers: AUTH_HEADER,
  });
  return response.data.results;
};

export const getTrendingMovies = async () => {
  const url = `${BASE_URL}/trending/movie/day`;
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response.data;
};

export const getMovieDetails = async (movieId) => {
  const url = `${BASE_URL}/movie/${movieId}`;
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response.data;
};