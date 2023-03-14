import { Link } from "react-router-dom";
import { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    const [bars, SetBar] = useState("bars unclicked");
    const [links, setLinks] = useState("links hidden");
    const [menuClicked, setMenuClicked] = useState(false);


    function showMenu (){
      
    }

    return (  
        <div className="navbar">
            <div className="navs">
            <FontAwesomeIcon icon={faBars} className="bars" onClick={showMenu}></FontAwesomeIcon>
                <h2>SABIMOVIE</h2>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/watch">Watch</Link>
                </div>
            </div>
            <Link to='/Search'>
                <div className="search-bar">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"></FontAwesomeIcon>
                    <input type="text" placeholder="Search" />
                </div>
            </Link>
        </div>
    );
}
 
export default Navbar;