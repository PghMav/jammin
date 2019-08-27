import React from 'react';
import Track from '../Track/Track';
import './TrackList.css';


class TrackList extends React.Component {

    renderTracks(searchResults){

      const tracks = []
      Object.keys(searchResults).map(track =>{
          // not sure what I'm trying to do here; push a track to the array??
      });

      return <Track name={track.name} artist={track.artist} album={track.album} key={track.id} />;

  }



      render(){
         return (
           <div className="TrackList">
             {this.renderTracks(this.props.searchResults)}
           </div>

         );
      }
  }

export default TrackList;
