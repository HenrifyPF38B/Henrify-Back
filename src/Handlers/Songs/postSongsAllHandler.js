import axios from "axios";
import { Genres, Songs } from "../../Models/relations.js";
import { Albums } from "../../Models/relations.js";

const URL_ALBUM = "https://henrify-api-back.up.railway.app/albums";

const postSongsAllHandler = async (req, res, next) => {
  try {
    //CARGAR DATA A ALBUMS
    const albumApi = (await axios.get(URL_ALBUM)).data;
    if (!albumApi) return res.status(400).send("Api Albums no tiene Data");

    for (const elem of albumApi) {
      const totalSongs = 0;
      const price = 0;
      const stock = parseInt(elem.stock);
      await Albums.findOrCreate({
        where: { name: `${elem.name}` },
        defaults: {
          artists: `${elem.artists}`,
          launchDate: `${elem.launchDate}`,
          genres: `${elem.genres}`,
          totalSongs: `${totalSongs}`,
          image: `${elem.image}`,
          price: `${price}`,
          stock: `${stock}`,
        },
      });
      //CARGA DATOS A GENRES
      await Genres.findOrCreate({ where: { name: `${elem.genres}` } });
    }

    //CARGAR DATOS A SONG
    const URL_SONG = "https://henrify-api-back.up.railway.app/songs";
    const songsApi = (await axios.get(URL_SONG)).data;

    if (!songsApi) return res.status(400).send("Api Songs no tiene Data");
    for (const elem of songsApi) {
      await Songs.findOrCreate({
        where: { name: `${elem.name}` },
        defaults: {
          artists: `${elem.artists}`,
          launchDate: `${elem.launchDate}`,
          genres: `${elem.genres}`,
          audio: `${elem.audio}`,
          image: `${elem.image}`,
          AlbumId: `${elem.albumId}`,
        },
      });
    }
   
    return res
      .status(200)
      .send("Se cargaron los datos en Albums, Genres y Songs");
  } catch (error) {
    next(error);
  }
};


export default postSongsAllHandler;
