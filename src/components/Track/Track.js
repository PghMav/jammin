import React from 'react';
import './Track.css';


class Track extends React.Component {
      renderAction() {
        if(this.props.isRemoval === true){
          return <button class="Track-action">-</button>;
        }else{
          return <button class="Track-action">+</button>;
        }

      }
      render(){
         return (
           <div class="Track">
             <div class="Track-information">
               <h3>{this.props.name}</h3>
               <p>{this.props.artist} | {this.props.artist}</p>
             </div>
             //button
           </div>

         );
      }
  }

export default Track;
