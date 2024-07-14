import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
        name : "movies",
        initialState : {
            nowPlayingMovies : null,
            upcomingMovies : null,
            popularMovies : null,
            topRatedMovies : null,
            trailer : {}
        },
        reducers : {
            addNowPlayMovies : (state,action) => {
                state.nowPlayingMovies = action.payload;
            },
            addUpcoming : (state,action) => {
                state.upcomingMovies = action.payload;
            },
            addPopular : (state,action) => {
                state.popularMovies = action.payload;
            },
            addTopRated : (state,action) => {
                state.topRatedMovies = action.payload;
            },
            addTrailer : (state,action) => {
                state.trailer = action.payload;
            }
        }
});

export const {addNowPlayMovies,addTrailer,addUpcoming,addPopular,addTopRated} = movieSlice.actions;

export default movieSlice.reducer