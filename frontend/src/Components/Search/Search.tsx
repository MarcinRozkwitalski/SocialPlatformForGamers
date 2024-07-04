import React, { useState } from 'react'
import './Search.css';

interface Props {
    onSearch: (query: string) => void;
}

const Search: React.FC<Props> = ({ onSearch }: Props): JSX.Element => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    const handleKeyDown = (e: any) => {
        if (e.code === "Enter") {
            handleSearch();
        }
    };

    return (
    <div className="search-container">
        <input className="search-input"
            type="text"
            value={query} 
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder='Search games...'
        />
        <button className="search-button" onClick={handleSearch}>Search</button>
    </div>
  )
};

export default Search;