import { putSongById } from "../../Controllers/Songs.controllers.js";
import { validDate } from "../../Util/validDate.js";
import { validUrl } from "../../Util/validUrl.js";

//***FUNCION: Modificar un registro de Song
const putSongsHandler = async (req, res, next) => {
  //return res.status(400).send("PUT Songs");
  const { id } = req.params;
  const verifId = parseInt(id);
  if (isNaN(verifId))
    return res.status(400).json({ error: "No es un número de ID" });
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
    if (!checkDate) return res.status(400).json({ error: "invalid date" });

    //VALIDA el formato de URL del Audio
    const checkUrlAudio = validUrl(audio);
    if (checkUrlAudio === false)
      return res.status(400).json({ error: "invalid URL del Audio" });

    //VALIDA el formato de URL de la image
    const checkUrlImage = validUrl(image);
    if (checkUrlImage === false)
      return res.status(400).json({ error: "invalid URL de la Imagen" });
    
    //VALIDA si es un número el AlbumId
    const verifIdAlbum = parseInt(AlbumId);
    if (isNaN(verifIdAlbum))
      return res.status(400).json({ error: "No es un número el AlbumId" });
    
    //Llama al Controller para modificar un registro
    const putSong = await putSongById(
      verifId,
      name,
      artists,
      launchDate,
      genres,
      audio,
      image,
      deleted,
      parseInt(AlbumId)
    );
    if (!putSong.data) return res.status(400).json({ error: putSong });
    return res.status(200).json(putSong);
  } catch (error) {
    next(error);
  }
}

export default putSongsHandler

