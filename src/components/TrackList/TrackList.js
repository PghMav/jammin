import React from 'react';
import Track from '../Track/Track';
import './TrackList.css';


class TrackList extends React.Component {

    renderTracks(searchResults){
      const tracks = []

      tracks.push(searchResults.map(track=>{

        return <Track name={track.name} artist={track.artist} album={track.album} key={track.id} />;
      }))
      return tracks;


  }



      render(){
         return (
           <div className="TrackList">
            {this.renderTracks(this.props.searchResults)}
          
            <Track name={'Moon River'} artist={'Audrey Hepburn'} album={'Funny Face'} key={6} />
            <Track name={'Hey Ya'} artist={'OutKast'} album={'Speakerboxxx'} key={2348} />
            <Track name={'Even Flow'} artist={'Pearl Jam'} album={'Ten'} key={3892} />

           </div>

         );
      }
  }

export default TrackList;
