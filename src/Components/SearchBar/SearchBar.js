import React from 'react';
import './SearchBar.css';

export const SearchBar = () => (
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" />
            <button className="SearchButton">SEARCH</button>
        </div>
);

