import { Link } from "react-router-dom";
import "./movies-item.css";

const MoviesItem = ({id, title, poster_path, overview, vote_average}) => {

    const IMG_API = "https://image.tmdb.org/t/p/w1280";

    return (
        <Link to={`/movie-page/${id}`} className="movie__item">
            <img className="movie__item-poster" src={IMG_API + poster_path} alt="poster" />
            <div className="movie__item-title">{title}</div>
            <div className="movie__item-overview">
                <h3>Overview:</h3>
                <p>{overview}</p>
            </div>
            <span className="movie__item-rate">{vote_average}</span>
        </Link>  
    )
}

export default MoviesItem;