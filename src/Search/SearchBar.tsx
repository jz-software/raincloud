import { useState } from 'react';
import './SearchBar.css';

interface Props {
  onSearch: (query: string) => void
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
    setQuery('');
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }
  return(
    <form className="search-bar" onSubmit={onSubmit}>
      <div>
        <input type="text" placeholder="Search.." name="search" value={query} onChange={onChange} />
        <button type="submit"><i className="fas fa-arrow-right"></i></button>
      </div>
    </form>
  )
}

export default SearchBar;