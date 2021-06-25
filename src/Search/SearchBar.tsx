import { useEffect, useState } from 'react';
import RecentlySearched from './RecentlySearched';
import './SearchBar.css';

interface Props {
  onSearch: (query: string) => void
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [recentlySearched, setRecentlySearched] = useState<string[]>([]);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery('');
    search(query);
  }
  const search = (toSearchQuery: string) => {
    onSearch(toSearchQuery);
    if(!recentlySearched.includes(toSearchQuery)) {
      const shifted = recentlySearched.length >= 3 ? recentlySearched.slice(0, -1) : recentlySearched;
      setRecentlySearched([toSearchQuery, ...shifted]);
      window.localStorage.setItem('raincloud-recently-searched', JSON.stringify([toSearchQuery, ...shifted]));
    }
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }
  useEffect(() => {
    const searched = window.localStorage.getItem('raincloud-recently-searched');
    if(searched === null) {
        setRecentlySearched([]);
        return;
    }
    try {
        const parsed = JSON.parse(searched);
        if(Array.isArray(parsed)) {
            setRecentlySearched(parsed);
        } else {
            setRecentlySearched([]);
        }
    } catch (error) {
        setRecentlySearched([]);
    }
  }, [])
  return(
    <form className="search-bar" onSubmit={onSubmit}>
      <div>
        <input type="text" placeholder="Search.." name="search" value={query} onChange={onChange} />
        <button type="submit"><i className="fas fa-arrow-right"></i></button>
      </div>
      <RecentlySearched items={recentlySearched} onClickEvent={(query) => search(query)} />
    </form>
  )
}

export default SearchBar;