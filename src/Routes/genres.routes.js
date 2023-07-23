import { Router } from "express";
import getGenresHandler from "../Handlers/Genres/getGenresHandler.js";
import getGenresByIdHandler from "../Handlers/Genres/getGenresByIdHandler.js";
import postGenresHandler from "../Handlers/Genres/postGenresHandler.js";
import deleteGenresHandler from "../Handlers/Genres/deleteGenresHandler.js";

export const genresRouter = Router()

genresRouter.get('/', getGenresHandler)
genresRouter.get('/:id',getGenresByIdHandler)
genresRouter.post('/', postGenresHandler)
genresRouter.delete('/:id', deleteGenresHandler)