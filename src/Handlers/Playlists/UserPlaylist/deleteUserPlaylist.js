import { deleteUserPlaylist } from "../../../Controllers/Playlists.controllers";


export const deleteUserPlaylistHandler = async(req, res)=>{
  try{
    const {data} = await deleteUserPlaylist(req.params.playlistId);

    if(data === "Playlist not found"){
      res.status(500).json(data);
    }else{
      res.status(200).json(data);
    }
  }catch(error){
    console.log(error);
  }
};