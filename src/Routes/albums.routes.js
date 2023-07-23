import { Router } from 'express'
import {
  getAlbumsHandler,
  getAlbumsByIdHandler,
  postAlbumsHandler,
  deleteAlbumsHandler,
  putAlbumsHandler,
} from '../Handlers/Albums/albumsHandler.js'
import { validateAlbum } from '../Handlers/Albums/validate.js'

export const albumsRouter = Router()

albumsRouter.get('/', getAlbumsHandler)
albumsRouter.get('/:id', getAlbumsByIdHandler)
albumsRouter.post('/', validateAlbum, postAlbumsHandler)
albumsRouter.put('/:id', putAlbumsHandler)
albumsRouter.delete('/:id', deleteAlbumsHandler)
