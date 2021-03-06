import React from 'react';
import Track from '../Track/Track';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';


class Playlist extends React.Component {
    constructor(props){
      super(props);
      this.handleNameChange = this.handleNameChange.bind(this);
    }

      handleNameChange(e){
     this.props.onNameChange(e.target.value);
      }

      render(){
         return (
           <div className="Playlist">
             <input value={this.props.playlistName} onChange={this.handleNameChange}/>

             <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval}/>
             <button className="Playlist-save">SAVE TO SPOTIFY</button>
           </div>
         );
      }
  }

export default Playlist;
