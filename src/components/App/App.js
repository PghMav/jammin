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
        ]
        };
      }

      render(){
         return (
             <div>
             <h1>Ja<span className="highlight">mmm</span>ing</h1>
             <div className="App">
               <SearchBar />
               <div className="App-playlist">
                 <SearchResults searchResults={this.state.searchResults} />
                 <Playlist />
               </div>
             </div>
           </div>
         );
      }
  }

  export default App;
