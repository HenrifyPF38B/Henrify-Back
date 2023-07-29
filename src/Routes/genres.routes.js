import { Router } from "express";
import {getGenresHandler} from "../Handlers/Genres/genresHandler.js";
import {getGenresByIdHandler} from "../Handlers/Genres/genresHandler.js";
import {postGenresHandler} from "../Handlers/Genres/genresHandler.js";
import {deleteGenresHandler} from "../Handlers/Genres/genresHandler.js";

export const genresRouter = Router()

genresRouter.get('/', getGenresHandler)
genresRouter.get('/:id',getGenresByIdHandler)
genresRouter.post('/', postGenresHandler)
genresRouter.delete('/:id', deleteGenresHandler)