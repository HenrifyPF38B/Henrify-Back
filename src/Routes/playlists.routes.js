import { Router } from 'express'

import {
  deletePlaylistsHandler,
  getPlaylistsByIdHandler,
  getPlaylistsHandler,
  postPlaylistsHandler,
  putPlaylistsHandler,
} from '../Handlers/Playlists/playlistHandler.js'
export const playlistsRouter = Router()

playlistsRouter.get('/', getPlaylistsHandler)
playlistsRouter.get('/:id', getPlaylistsByIdHandler)
playlistsRouter.post('/', postPlaylistsHandler)
playlistsRouter.put('/:id', putPlaylistsHandler)
playlistsRouter.delete('/:id', deletePlaylistsHandler)
