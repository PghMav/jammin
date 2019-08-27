import React from 'react';
import Track from '../Track/Track';
import './Playlist.css';


class Playlist extends React.Component {

      renderTracks(playlistTracks){
        const tracks = [];
        tracks.push(
          playlistTracks.map(playlistTrack=>{
            const track = playlistTrack;
            return <Track name={track.name} artist={track.artist} album={track.album} key={track.id} />
          })
        );
        return tracks;
      }

      render(){
         return (
           <div className="Playlist">
             <input value={this.props.playlistName}/>
             {this.renderTracks(this.props.playlistTracks)}
             <button className="Playlist-save">SAVE TO SPOTIFY</button>
           </div>
         );
      }
  }

export default Playlist;
