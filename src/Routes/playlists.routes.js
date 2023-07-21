import { Router } from "express";
import getPlaylistsHandler from "../Handlers/Playlists/getPlaylistsHandler.js";
import getPlaylistsByIdHandler from "../Handlers/Playlists/getPlaylistsByIdHandler.js";
import postPlaylistsHandler from "../Handlers/Playlists/postPlaylistsHandler.js";
import putPlaylistsHandler from "../Handlers/Playlists/putPlaylistsHandler.js";
import deletePlaylistsHandler from "../Handlers/Playlists/deletePlaylistsHandler.js";

export const playlistsRouter = Router()

playlistsRouter.get('/', getPlaylistsHandler)
playlistsRouter.get('/:id',getPlaylistsByIdHandler)
playlistsRouter.post('/', postPlaylistsHandler)
playlistsRouter.put('/:id', putPlaylistsHandler)
playlistsRouter.delete('/:id', deletePlaylistsHandler)