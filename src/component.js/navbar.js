
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Search from '../component.js/Search';

const Navbar = () => {
    const [showSearch, setShowSearch] = useState(false)
    console.log(showSearch)

    return (
        <>
            <div className="navbar">
                <div className="navs">
                    <FontAwesomeIcon icon={faBars} className="bars"></FontAwesomeIcon>
                    <h2>SABIMOVIE</h2>
                    <div className="links">
                        <Link to="/">Home</Link>
                        <Link to="/watch">Watch</Link>
                    </div>
                </div>

                <div className="search-bar" onClick={() => { setShowSearch(!showSearch) }}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"></FontAwesomeIcon>
                    <input type="text" placeholder="Search any movie" />
                </div>

            </div>
            {showSearch && <Search hide={setShowSearch} />}
        </>
    );
}

export default Navbar;