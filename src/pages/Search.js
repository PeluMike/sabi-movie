import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMultiply} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Search = () => {
    return (  
        <div className="search-page">
            <div className="search">
                <input type="text" placeholder="Enter Keywords..." />
            </div>
            <Link to="/">
            <FontAwesomeIcon icon={faMultiply} className="times"></FontAwesomeIcon>
            </Link>
            
        </div>
    );
}
 
export default Search;