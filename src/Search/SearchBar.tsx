import './SearchBar.css';

const SearchBar = () => {
    return(
        <form className="search-bar">
          <div>
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit"><i className="fas fa-arrow-right"></i></button>
          </div>
        </form>
    )
}

export default SearchBar;