import { Link } from "react-router-dom";

import Search from "../search/search";

import "./header.css";

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="header__title">
                Movies
            </Link>
            <Search/>
        </header>
    )
}

export default Header;