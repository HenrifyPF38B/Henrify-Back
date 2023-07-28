import Playlists from "../Models/Playlists.js";

export const getAllPlaylists = async() =>{
  const response = await Playlists.findAll();

  return response;
};