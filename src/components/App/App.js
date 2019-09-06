import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';



class App extends React.Component {
      constructor(props){
        super(props);
        this.state = {
          searchResults: [
          {
              name: "Whiskey and You",
              artist: 'Chris Stapelton',
              album: 'Traveler',
              id: '0897234'
          },
          {
              name: "Something Like Olivia",
              artist: 'John Mayer',
              album: 'Born and Raised',
              id: '2348'
          },
          {
              name: "Summertime Romance",
              artist: 'JohnnySwim',
              album: 'Georgica Pond',
              id: '2347980459'
          },
          {
              name: "Black Dog",
              artist: 'Led Zeppelin',
              album: 'Led Zeppelin IV',
              id: '3458906'
          }
        ],
        playlistName: "Awesome Playlist",
        playlistTracks: [
          {
              name: "One",
              artist: 'U2',
              album: 'Achtung Baby',
              id: '689349'
          },
          {
              name: "Hey Ya",
              artist: 'OutKast',
              album: 'Speakerboxxx',
              id: '23478'
          },
          {
              name: "Hello",
              artist: 'Adele',
              album: '25',
              id: '78'
          }
        ]
        };
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
        this.savePlaylist = this.savePlaylist.bind(this);
        this.search = this.search.bind(this);
      }

      search(term){
        console.log(term);
      }

      savePlaylist(){
        const trackURIs = [];
        const playlistTracks = this.state.playlistTracks;
        playlistTracks.map(track =>{
          trackURIs.push(track.uri);
        })
        return trackURIs;
      }

      addTrack(track){
        const playlist = this.state.playlistTracks;
        const checkIt = playlist.find(savedTrack => savedTrack.id === track.id);

        if (checkIt){
          return
        }else{
          playlist.push(track);
          this.setState({playlistTracks: playlist});
        }

        }

      removeTrack(track){
          const playlist = this.state.playlistTracks;
        //  const index = playlist.indexOf(track);
          const newList = playlist.filter(savedTrack => savedTrack.id !== track.id);

          this.setState({playlistTracks: newList});

        }

      updatePlaylistName(name){
        this.setState({playlistName: name});

      }


      render(){
         return (
             <div>
             <h1>Ja<span className="highlight">mmm</span>ing</h1>
             <div className="App">
               <SearchBar />
               <div className="App-playlist">
                 <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} isRemoval={false} onSearch={this.search} />
                 <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} isRemoval={true} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
               </div>
             </div>
           </div>
         );
      }
  }

  export default App;
