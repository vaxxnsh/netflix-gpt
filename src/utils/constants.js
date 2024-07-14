
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTQ1ZjBjZDcyY2U1MjAxNjhhMDllNTA4ZDJiZWZlMSIsIm5iZiI6MTcyMDkzOTg4NS4yODgxNzIsInN1YiI6IjY2OTFhMjU2OTY3MTZiMmVlZTZlMWQ0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dPQ0ZtZufJovUEq-qoXNnd7DNFh0649fKdGsUeKSSww'
  }
};

export const MOVIE_NOW_PLAYING = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

export const MOVIE_TOP_RATED = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

export const MOVIE_POPULAR = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'

export const MOVIE_UPCOMING = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';

export const MOVIE_POSTER = 'https://image.tmdb.org/t/p/w500';

export const MOVIE_VIDEO_API = (id) => {
   return 'https://api.themoviedb.org/3/movie/' + id + '/videos?language=en-US'
}