import React from 'react';
import Track from '../Track/Track';
import './TrackList.css';


class TrackList extends React.Component {

    renderTracks(tracks){
      const tracklist = [];

      tracklist.push(tracks.map(track=>{

      return <Track track={track} onAdd={this.props.onAdd} onRemove={this.props.onRemove} key={track.id} isRemoval={this.props.isRemoval}/>
      }))
      return tracklist;

  }



      render(){
         return (
           <div className="TrackList">
            {this.renderTracks(this.props.tracks)}
           </div>

         );
      }
  }

export default TrackList;
