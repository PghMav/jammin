import React from 'react';
import './Playlist.css';


class Playlist extends React.Component {

      render(){
         return (
           <div className="Playlist">
             <input value="{'New Playlist'}"/>

             <ul>
                <li>Track 1 </li>
                <li>Track 2 </li>
                <li>Track 3 </li>
             </ul>


             <button className="Playlist-save">SAVE TO SPOTIFY</button>
           </div>
         );
      }
  }

export default Playlist;
