import { Router } from "express"
import responseController from "../Controllers/responseController.js";
const postSongController = responseController.postSongController;
const getAlbumsController = responseController.getAlbumsController;
const getGenresController = responseController.getGenresController
const getSongsController  = responseController.getSongsController

const router = Router();

router.get('/albums', getAlbumsController)

router.get('/genres', getGenresController)

router.get('/songs', getSongsController)

router.post('/new/song', postSongController)

export default  router;