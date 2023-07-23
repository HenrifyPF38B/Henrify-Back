import Albums from "../Models/Albums.js";
import Genres from "../Models/Genres.js";
import Song from "../Models/Songs.js";

//***FUNCION: Crea un Song
export const postSong = async (
  name,
  artists,
  launchDate,
  genres,
  audio,
  image,
  AlbumId
) => {
  // VALIDA si existe el ID del AlbumId y/o si Hay DATA
  const validAlbumId = await Albums.findByPk(AlbumId);
  if (!validAlbumId)
    return "No existen Datos en Albums y/o no existe el ID: " + AlbumId;

  //VALIDA si existe GENRE
  const validGenres = await Genres.findAll({
    where: { name: genres },
  });
  if (
    !validGenres ||
    validGenres === null ||
    validGenres === undefined ||
    !validGenres.length
  )
    return "No existen Datos en Genres y/o no existe el name: " + genres;

  //CREA una nueva Song. Si existe el nombre no lo crea
  const newSong = await Song.findOrCreate({
    where: { name: `${name}` },
    defaults: {
      artists: `${artists}`,
      launchDate: `${launchDate}`,
      genres: `${genres}`,
      audio: `${audio}`,
      image: `${image}`,
      AlbumId: `${AlbumId}`,
    },
  });

  //VERIFICAR si se creó un nuevo registro
  const createdNewSong = newSong[1];
  if (createdNewSong) {
    const songRecord = newSong[0];
    return { data: songRecord };
  } else {
    return "Se encontró un registro existente con el mismo nombre.";
  }
};

//***FUNCION: Get Songs no deleted
export const getSong = async () => {
  const songs = await Song.findAll({
    where: { deleted: false },
  });
  if (!songs) {
    return "No existe Songs";
  }
  return { data: songs };
};

//***FUNCION: Get Song by ID
export const getSongById = async (id) => {
  const song = await Song.findByPk(id);
  if (!song) {
    return ("No existe Song con Id : " + id);
  }
  return { data: song };
};

//***FUNCION: Delete Song By Id
export const deleteSongById = async (id) => {
  const song = await Song.findByPk(id);
  if (!song) {
    return "No existe Song con Id : " + id;
  }
  song.deleted = true;
  await song.save();

  return { data: song };
};

//***FUNCION: Put Song - Modificar un campo de Song
export const putSongById = async (
  id,
  name,
  artists,
  launchDate,
  genres,
  audio,
  image,
  deleted,
  AlbumId
) => {
  // VALIDA si existe el ID del AlbumId y/o si Hay DATA
  const validAlbumId = await Albums.findByPk(AlbumId);
  if (!validAlbumId)
    return "No existen Datos en Albums y/o no existe el ID: " + AlbumId;

  //VALIDA si existe GENRE
  const validGenres = await Genres.findAll({
    where: { name: genres },
  });
  if (!validGenres || validGenres === null || !validGenres.length)
    return "No existen Datos en Genres y/o no existe el Genre: " + genres;

  //BUSCA Song y Modifica
  const song = await Song.findByPk(+id);

  if (!song) {
    throw new Error(`There is no song with by ID : ${id}`);
  }

  if (name) song.name = name;
  if (artists) song.artists = artists;
  //Fecha validada en el Handler
  if (launchDate) song.launchDate = launchDate;
  //URL verificado en el Handler
  if (song) song.audio = audio;
  if (image) song.image = image;
  if (deleted === true || deleted === false) song.deleted = deleted;

  //AlbumId ya está verificado
  song.AlbumId = AlbumId;

  await song.save();

  return { data: song };
};
