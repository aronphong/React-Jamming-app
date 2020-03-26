import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
    }

    search() {
        const searchTerm = document.getElementsByTagName('input')[0].value;
        this.props.onSearch(searchTerm);
    }

    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album or Artist"/>
                <button className="SearchButton" onClick={this.search}>SEARCH</button>
            </div>
    );    
    }
}



