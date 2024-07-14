import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';
const VideoBg = ({id}) => {
  useMovieTrailer(id);
  const trailer = useSelector(store => store.movies.trailer);
  return (
    <div className='relative w-screen -top-28 pointer-events-none'>
      <iframe className='w-screen aspect-video'
         width="100vw"
         aspect-ratio="16/9"
         src={"https://www.youtube.com/embed/"+trailer.key+"?cc_load_policy=1&version=3&loop=1&playlist="+trailer.key+"&rel=0&autoplay=1&mute=1"}
         title="YouTube video player" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         referrerPolicy="strict-origin-when-cross-origin" 
         allowFullScreen>
      </iframe>
   </div>
  )
}

export default VideoBg