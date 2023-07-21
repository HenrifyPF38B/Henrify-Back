import { Router } from 'express'
import {
  deleteAlbumsHandler,
  getAlbumsByIdHandler,
  getAlbumsHandler,
  postAlbumsHandler,
  putAlbumsHandler,
} from '../Handlers/Albums/albumsHandler.js'

export const albumsRouter = Router()

albumsRouter.get('/', getAlbumsHandler)
albumsRouter.get('/:id', getAlbumsByIdHandler)
albumsRouter.post('/', postAlbumsHandler)
albumsRouter.put('/:id', putAlbumsHandler)
albumsRouter.delete('/:id', deleteAlbumsHandler)
