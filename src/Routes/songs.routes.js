import { Router } from "express";
import getSongsHandler from "../Handlers/Songs/getSongsHandler.js";
import getSongsByIdHandler from "../Handlers/Songs/getSongsByIdHandler.js";
import postSongsHandler from "../Handlers/Songs/postSongsHandler.js";
import postSongsAllHandler from "../Handlers/Songs/postSongsAllHandler.js";
import putSongsHandler from "../Handlers/Songs/putSongsHandler.js";
import deleteSongsHandler from "../Handlers/Songs/deleteSongsHandler.js";

export const songsRouter = Router()

songsRouter.get('/', getSongsHandler)
songsRouter.get('/:id',getSongsByIdHandler)
songsRouter.post('/', postSongsHandler)
songsRouter.post("/all", postSongsAllHandler);
songsRouter.put('/:id', putSongsHandler)
songsRouter.delete('/:id', deleteSongsHandler)