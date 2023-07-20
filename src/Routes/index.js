import { Router } from "express"
import responseController from "../Controllers/responseController.js";
const postAlbumController = responseController.postAlbumController;
const getAlbumsController = responseController.getAlbumsController;

const router = Router();

router.get('/albums', getAlbumsController)

router.post('/new/album', postAlbumController)

export default  router;