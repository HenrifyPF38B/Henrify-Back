import axios from "axios";
import Albums from "../Models/Albums.js";
import Playlists from "../Models/Playlists.js";

export const albumsToDb = async() =>{
  try{
    const response = await axios.get("https://spotify-api.up.railway.app/albums");

    response.data.map(el => {
      Albums.create({
        type:"album",
        name: el.name,
        albumId: el.id,
        artists: el.artists,
        image: el.image,
        tracks: el.tracks,
        price: Math.floor(Math.random() * 20) * 3
      })
    });

    return console.log(response);
  }catch(error){
    console.log(error);
  }
};


export const playlistsToDb = async() =>{
  try{
    const response = await axios.get("https://spotify-api.up.railway.app/playlist");

    response.data.map(el => {
      Playlists.create({
        type:"playlist",
        name: el.name,
        playlistId: el.id,
        artists: el.artists,
        owner: el.owner,
        image: el.image,
        tracks: el.tracks,
        price: 23
      })
    });

    return console.log("Success");
  }catch(error){
    console.log(error);
  }
};