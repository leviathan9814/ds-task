import { createStore, combineReducers, applyMiddleware } from "redux";
import moviesReducer from "./movies-reducer";
import movieItemReducer from "./movie-item-reducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    movies: moviesReducer,
    item: movieItemReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
