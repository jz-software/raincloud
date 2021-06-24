import './index.css';
import SearchBar from "./SearchBar";

interface Props {
    onSearch: (query: string) => void;
}

const Search: React.FC<Props> = ({ onSearch }) => {
    return (
        <div className="Search">
            <SearchBar onSearch={onSearch}  />
        </div>
    )
}

export default Search;