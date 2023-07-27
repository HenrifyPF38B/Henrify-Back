import { Router } from "express";
import getAlbumsHandler from "../Handlers/Albums/getAlbumsHandler.js";
import getAlbumsByIdHandler from "../Handlers/Albums/getAlbumsByIdHandler.js";
import postAlbumsHandler from "../Handlers/Albums/postAlbumsHandler.js";
import putAlbumsHandler from "../Handlers/Albums/putAlbumsHandler.js";
import deleteAlbumsHandler from "../Handlers/Albums/deleteAlbumsHandler.js";
import { albumsToDb } from "../Util/initFetch.js";

export const albumsRouter = Router()

albumsRouter.get('/', getAlbumsHandler)
albumsRouter.get('/:id', getAlbumsByIdHandler)
albumsRouter.post('/', validateAlbum, postAlbumsHandler)
albumsRouter.put('/:id', putAlbumsHandler)
albumsRouter.delete('/:id', deleteAlbumsHandler)



// Ruta para insertar por primera vez los albums a la DB.
albumsRouter.get('/db/fetch', albumsToDb)
