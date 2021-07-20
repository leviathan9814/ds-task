
import Search from "../search/search";

import "./header.css";

const Header = () => {
    return (
        <header className="header">
            <span  className="header__title">
                Movies
            </span>
            <Search/>
        </header>
    )
}

export default Header;