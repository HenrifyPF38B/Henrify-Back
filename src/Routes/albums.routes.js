import { Router } from "express";
import getAlbumsHandler from "../Handlers/Albums/getAlbumsHandler.js";
import getAlbumsByIdHandler from "../Handlers/Albums/getAlbumsByIdHandler.js";
import postAlbumsHandler from "../Handlers/Albums/postAlbumsHandler.js";
import putAlbumsHandler from "../Handlers/Albums/putAlbumsHandler.js";
import deleteAlbumsHandler from "../Handlers/Albums/deleteAlbumsHandler.js";

export const albumsRouter = Router()

albumsRouter.get('/', getAlbumsHandler)
albumsRouter.get('/:id',getAlbumsByIdHandler)
albumsRouter.post('/', postAlbumsHandler)
albumsRouter.put('/:id', putAlbumsHandler)
albumsRouter.delete('/:id', deleteAlbumsHandler)