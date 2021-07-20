import { useState } from "react";
import {  useDispatch } from "react-redux";
import {searchMovie} from "../../redux/movies-reducer";
import "./search.css";

const Search = () => {

  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (search) {
      dispatch(searchMovie(search));

      setSearch("");
    }
  }

  return (
      <form className="search" onSubmit={handleOnSubmit}>
        <input className="search__input"
          type="text"
          name="search"
          placeholder="Search movie..."
          value={search}
          onChange={(e) =>  setSearch(e.target.value)}
        />
        <button className="search__btn" type="submit">Search</button>
      </form>
  );
}

export default Search;