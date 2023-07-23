import { Router } from "express";
import getUsersHandler from "../Handlers/Users/getUsersHandler.js";
import getUsersByIdHandler from "../Handlers/Users/getUsersByIdHandler.js";
import postUsersHandler from "../Handlers/Users/postUsersHandler.js";
import putUsersHandler from "../Handlers/Users/putUsersHandler.js";
import deleteUsersHandler from "../Handlers/Users/deleteUsersHandler.js";

export const usersRouter = Router()

usersRouter.get('/', getUsersHandler)
usersRouter.get('/:id',getUsersByIdHandler)
usersRouter.post('/', postUsersHandler)
usersRouter.put('/:id', putUsersHandler)
usersRouter.delete('/:id', deleteUsersHandler)