import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    <div className='w-full bg-black relative z-20 -top-60 h-auto'>
      <div className='relative -top-28 bg-transparent z-30'>
      <MovieList title = "Now Playing" movies = {movies.nowPlayingMovies} />
      <MovieList title = "Top Rated" movies = {movies.topRatedMovies} />
      <MovieList title = "Popular" movies = {movies.popularMovies} />
      <MovieList title = "Upcoming" movies = {movies.upcomingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer;