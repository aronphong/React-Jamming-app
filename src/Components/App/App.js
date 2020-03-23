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
        id: "1"
      }, 
      {
        name: "Aron",
        artist: "Phong",
        album: "2",
        id: "3"
      }
      ],
      playListName: "Test",
      playListTracks: [{
        name: "Something Comforting",
        artist: "Porter Robinson",
        album: "New",
        id: "111"
      }],
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  };

  addTrack(track) {
    let currentTracks = [...this.state.playListTracks];
    if (currentTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    currentTracks.push(track);
    this.setState({playListTracks: currentTracks});
  }

  removeTrack(track) {
    let currentTracks = [...this.state.playListTracks];
    if (currentTracks.find(savedTrack => savedTrack.id === track.id)) {
      let index = currentTracks.indexOf(track);
      currentTracks.splice(index, 1);
      this.setState({playListTracks: currentTracks});
    }
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
            onAdd={this.addTrack}/>
          <Playlist 
            onRemove={this.removeTrack}
            playListTracks={this.state.playListTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
