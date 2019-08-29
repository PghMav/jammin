import React from 'react';
import Track from '../Track/Track';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';


class Playlist extends React.Component {

      render(){
         return (
           <div className="Playlist">
             <input value={this.props.playlistName}/>

             <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval}/>
             <button className="Playlist-save">SAVE TO SPOTIFY</button>
           </div>
         );
      }
  }

export default Playlist;
