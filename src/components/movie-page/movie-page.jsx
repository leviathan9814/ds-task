import { Link } from "react-router-dom";
import {useEffect} from "react";
import { withRouter } from "react-router";
import { getMovieItem } from "../../redux/movie-item-reducer";
import {useDispatch, useSelector } from "react-redux";
import MovieDetails from "./movie-details";


import "./movie-page.css";

const MoviePage = (props) => {

    const movie = useSelector(state => state.item.movieItem)
    const dispatch = useDispatch();

    useEffect(() => {
        let itemId = props.match.params.itemId;
        dispatch(getMovieItem(itemId));
    }, []);


    return (
        <div className="movie__page">
            <div className="back">
                <Link to="/">Повернутись назад</Link>
            </div>

            <div className="movie">
                <MovieDetails {...movie}/>
            </div>
        </div>
    )
}


export default withRouter(MoviePage);