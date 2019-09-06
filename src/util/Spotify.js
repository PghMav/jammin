import React from 'react';


//const Spotify = require('spotify-web-api-js');
const s = new Spotify();

const token = "";
const Spotify ={
  getAccessToken(){
    if(token){
      return token;
    }
  }
    
}

export Spotify;
