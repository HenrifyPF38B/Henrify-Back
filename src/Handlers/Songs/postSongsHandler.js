import { postSong } from "../../Controllers/Songs.controllers.js";
import { validDate } from "../../Util/validDate.js";
import { validUrl } from "../../Util/validUrl.js";

//CREA UNA NUEVA CANCIÓN
const postSongsHandler = async (req, res, next) => {
  try {
    const { name, artists, launchDate, genres, audio, image, AlbumId } =
      req.body;

    //VALIDA la fecha llamando a una función
    const checkDate = validDate(launchDate);
    if (!checkDate) return res.status(400).send("invalid DATE");

    //VALIDA el formato de URL del Audio
    const checkUrlAudio = validUrl(audio);
    if (checkUrlAudio === false)
      return res.status(400).send("invalid URL del Audio");

    //VALIDA el formato de URL de la image
    const checkUrlImage = validUrl(image);
    if (checkUrlImage === false)
      return res.status(400).send("invalid URL de la Imagen");

    //VALIDA LOS DATOS llamando a una función
    const checkDatos = validDatos(name, artists, genres, AlbumId);
    if (checkDatos !== "") return res.status(400).send(checkDatos);

    const create = await postSong(
      name,
      artists,
      launchDate,
      genres,
      audio,
      image,
      AlbumId
    );
    return res.status(200).json(create);
  } catch (error) {
    next(error);
  }
};

//FUNCIÓN QUE VALIDA LOS DATOS
const validDatos = (name, artists, genres, AlbumId) => {
  let rpta = "";
  if (name === null || name === undefined || name === "")
    return (rpta = "Invalid name");
  if (artists === null || artists === undefined || artists === "")
    return (rpta = "Invalid artists Data");
  if (genres === null || genres === undefined || genres === "")
    return (rpta = "Invalid genres Data");
  if (typeof AlbumId !== "number") return (rpta = "Invalid AlbumId");
  return rpta;
};
export default postSongsHandler;
