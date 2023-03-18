
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMultiply } from '@fortawesome/free-solid-svg-icons';




const Search = ({ hide }) => {
    return (
        <div className="search-page">
            <div className="search">
                <input type="text" placeholder="Search movies" />
            </div>
            <FontAwesomeIcon icon={faMultiply} className="times" onClick={() => { hide(false) }}></FontAwesomeIcon>
        </div>
    );
}

export default Search;