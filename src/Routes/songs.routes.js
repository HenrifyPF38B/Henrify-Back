import { Router } from "express";
import { deleteSongsHandler, getSongsByIdHandler, getSongsHandler, postSongsHandler, putSongsHandler } from "../Handlers/Songs/songsHandler.js";


export const songsRouter = Router()

songsRouter.get('/', getSongsHandler)
songsRouter.get('/:id',getSongsByIdHandler)
songsRouter.post('/', postSongsHandler)
songsRouter.put('/:id', putSongsHandler)
songsRouter.delete('/:id', deleteSongsHandler)