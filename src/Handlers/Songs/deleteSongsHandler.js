import { deleteSongById } from "../../Controllers/Songs.controllers.js";

const deleteSongsHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const songs = await deleteSongById(+id);
    return res.status(200).json(songs);
  } catch (error) {
    next(error);
  }
};

export default deleteSongsHandler;
