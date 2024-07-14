import MovieCard from "./MovieCard"

const MovieList = ({title,movies}) => {
  if( movies === null) return; 

  return (
    <div className="px-6 w-full overflow-hidden">
        <h1 className="py-6 text-4xl font-medium font-sans text-white">{title}</h1>
        <div className="flex overflow-x-scroll no-scrollbar">
            <div className="flex">
                {movies.map(movie => <MovieCard key = {movie.id} posterPath = {movie.poster_path} />)}
            </div>
        </div>
    </div>
  )
}

export default MovieList