import { getSongById } from "../../Controllers/Songs.controllers.js";

const getSongByIdHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const song = await getSongById(+id);
    return res.status(200).json(song);
  } catch (error) {
    next(error);
  }
};

export default getSongByIdHandler;
