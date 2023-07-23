import { getSong } from "../../Controllers/Songs.controllers.js";

const getSongsHandler = async (req, res) => {
  try {
    const songs = await getSong();
    return res.status(200).json(songs);
  } catch (error) {
    next(error);
  }
};

export default getSongsHandler;
