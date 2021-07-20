import { MovieAPI } from "../api/api"

const SET_MOVIE = "SET_MOVIE"

const initialState = {
    movieItem: {}
}

const movieItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIE:
            return {
                ...state,
                movieItem: action.movieItem
            }
        default:
            return state;
    } 
}

export const setMovie = (movieItem) => ({type: SET_MOVIE, movieItem});


export const getMovieItem = (itemId) => async (dispatch) => {
    let response = await MovieAPI.getMovieItem(itemId);
    dispatch(setMovie(response.data))
}


export default movieItemReducer;