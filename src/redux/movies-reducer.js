import { MovieAPI } from "../api/api"

const SET_MOVIES = "SET_MOVIES"

const initialState = {
    movies: []
}

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return {
                ...state,
                movies: action.movies
            }
        default:
            return state;
    } 
}

export const setMovies = (movies) => ({type: SET_MOVIES, movies});

export const getMovies = () => async (dispatch) => {
    const response = await MovieAPI.getMovies();
    dispatch(setMovies(response.data.results));
}


export const searchMovie = (searchTerm) => async (dispatch) => {
    const response = await MovieAPI.searchMovie(searchTerm);
    dispatch(setMovies(response.data.results))
}

export default moviesReducer;