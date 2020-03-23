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
      ],
      playListName: "Test",
      playListTracks: [{
        name: "Something Comforting",
        artist: "Porter Robinson",
        album: "New",
        id: 111
      }],
    };

    this.addTrack = this.addTrack.bind(this);
  };

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    
    let currentTracks = this.state.playListTracks;
    currentTracks.push(track);
    console.log(currentTracks);

    this.setState({playListTracks: currentTracks})
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <SearchBar />
        <div className="App">
          <div className="App-playlist">
          <SearchResults 
            searchResults={this.state.searchResults}
            onAdd={this.state.addTrack}/>
          <Playlist playListTracks={this.state.playListTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
