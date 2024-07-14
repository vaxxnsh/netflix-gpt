import { useDispatch } from "react-redux";
import { API_OPTIONS,MOVIE_NOW_PLAYING,MOVIE_POPULAR,MOVIE_TOP_RATED,MOVIE_UPCOMING } from "../utils/constants";
import { useEffect } from "react";
import {addNowPlayMovies,addPopular,addTopRated, addUpcoming} from "../utils/movieSlice"
const useMovieData = () => {
    const dispatch = useDispatch();
   
  async function getNowPlayingMovies(){
    
    const data = await fetch(MOVIE_NOW_PLAYING,API_OPTIONS);
    
    const json = await data.json();
    console.log(json);
    dispatch(addNowPlayMovies(json?.results));
  }

  async function getUpcomingMovies(){
      
    const data = await fetch(MOVIE_UPCOMING,API_OPTIONS);
    
    const json = await data.json();

    dispatch(addUpcoming(json?.results));
  }

  async function getTopRatedMovies(){
      
    const data = await fetch(MOVIE_TOP_RATED,API_OPTIONS);
    
    const json = await data.json();

    dispatch(addTopRated(json?.results));
  }

  async function getPopularMovies(){
      
    const data = await fetch(MOVIE_POPULAR,API_OPTIONS);
    
    const json = await data.json();

    dispatch(addPopular(json?.results));
  }

  useEffect( () => {
    getNowPlayingMovies();
    getPopularMovies();
    getTopRatedMovies();
    getUpcomingMovies();
  },[])
}

export default useMovieData;