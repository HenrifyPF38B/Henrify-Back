import { putSongById } from "../../Controllers/Songs.controllers.js";
import { validDate } from "../../Util/validDate.js";
import { validUrl } from "../../Util/validUrl.js";

//***FUNCION: Modificar un registro de Song
const putSongsHandler = async (req, res, next) => {
  const { id } = req.params;
  try {
    const {
      name,
      artists,
      launchDate,
      genres,
      audio,
      image,
      deleted,
      AlbumId,
    } = req.body;
    //Se valida la fecha llamando a una función
    const checkDate = validDate(launchDate);
    if (!checkDate) return res.status(400).send("invalid date");

    //VALIDA el formato de URL del Audio
    const checkUrlAudio = validUrl(audio);
    if (checkUrlAudio === false)
      return res.status(400).send("invalid URL del Audio");

    //VALIDA el formato de URL de la image
    const checkUrlImage = validUrl(image);
    if (checkUrlImage === false)
      return res.status(400).send("invalid URL de la Imagen");

    //Llama al Controller para modificar un registro
    const putSong = await putSongById(
      +id,
      name,
      artists,
      launchDate,
      genres,
      audio,
      image,
      deleted,
      AlbumId
    );
    return res.status(200).json(putSong);
  } catch (error) {
    next(error);
  }
};

export default putSongsHandler;
