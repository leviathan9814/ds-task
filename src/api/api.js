import * as axios from "axios";

export const MovieAPI = {
    getMovies () {
        return axios.get("https://api.themoviedb.org/3/movie/popular?api_key=62dd341cbea2b6a589505b581e218f40&page=1")
    },

    getMovieItem (itemId) {
        return axios.get(`https://api.themoviedb.org/3/movie/${itemId}?api_key=62dd341cbea2b6a589505b581e218f40`)
    },

    searchMovie (searchTerm) {
        return axios.get(`https://api.themoviedb.org/3/search/movie?&api_key=62dd341cbea2b6a589505b581e218f40&query=${searchTerm}`)
    }
}