import MovieItem from "../movies-item/movies-item";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getMovies} from "../../redux/movies-reducer";

import "./movies.css";

const Movies = () => {
    
    const movies = useSelector(state => state.movies.movies)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovies());
    }, [])

    return (
        <div className="movies">
           {movies.map(item => {
               return <MovieItem key={item.id} {...item}/>
           })}
        </div>
    )
}

export default Movies;