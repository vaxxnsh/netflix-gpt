import { useEffect } from "react";
import { API_OPTIONS, MOVIE_VIDEO_API } from "../utils/constants";
import { addTrailer } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (id) => {
    const dispatch = useDispatch();
    async function getMovieVideos(){
        const data = await fetch(MOVIE_VIDEO_API(id),API_OPTIONS);
        const json = await data.json();
        console.log(json);
        const trailers = json?.results.filter(video => video?.type === "Trailer");
        const firstTrailer = trailers.length == 2 ? trailers[1] : trailers[0];
        console.log(firstTrailer);
        dispatch(addTrailer(firstTrailer));
     }
    
     useEffect(() => {
        getMovieVideos();
     },[]);
}

export default useMovieTrailer;