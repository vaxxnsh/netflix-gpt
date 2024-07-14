import {MOVIE_POSTER} from '../utils/constants'
const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
        <img 
            src={MOVIE_POSTER+posterPath}
            alt='Movie card'
        />
    </div>
  )
}

export default MovieCard;