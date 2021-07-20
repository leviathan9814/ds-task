
import "./movie-page.css";

const MovieDetails = ({title, poster_path, overview, vote_average, vote_count, release_date, runtime}) => {

    const IMG_API = "https://image.tmdb.org/t/p/w1280";

    return (
        <>
            <div className="poster">
                <img className="movie__poster" src={IMG_API + poster_path} alt="poster" />
            </div>
            <div className="movie__description">
                <h3 className="movie__title">{title}</h3>
                
                <div className="runtime">
                    <b>Runtime:</b> {runtime}min.
                </div>

                <div className="genre">
                    <b>Release:</b> <span>{release_date}</span>
                </div>

                <div className="overview">
                    <b>Overview:</b>
                    <span> {overview}</span>
                </div>
                
                <div className="rating">
                    <div><b>Rating:</b> <span> {vote_average}</span></div>
                    <div><b>Vote:</b> <span>{vote_count}</span></div>
                </div>
            </div>
        </>
    )
}


export default MovieDetails;