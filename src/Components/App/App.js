import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{
        name: "Aron",
        artist: "Phong",
        album: "1",
        id: 2
      }, 
      {
        name: "Aron",
        artist: "Phong",
        album: "2",
        id: 3
      }
    ]
    };
  }


  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <SearchBar />
        <div className="App">
          <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults}/>
          {/* <Playlist /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
