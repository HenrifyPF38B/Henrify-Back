import { Router } from "express";
import getUsersHandler from "../Handlers/Users/getUsersHandler.js";
import getUsersByIdHandler from "../Handlers/Users/getUsersByIdHandler.js";
import postUsersHandler from "../Handlers/Users/postUsersHandler.js";
import putUsersHandler from "../Handlers/Users/putUsersHandler.js";
import deleteUsersHandler from "../Handlers/Users/deleteUsersHandler.js";
import { loginUserHandler } from "../Handlers/Users/loginUserHandler.js";
import { createUserHandler } from "../Handlers/Users/createUserHandler.js";

export const usersRouter = Router()

usersRouter.get('/login', loginUserHandler)
usersRouter.get('/register', createUserHandler)
usersRouter.get('/', getUsersHandler)
usersRouter.get('/:id',getUsersByIdHandler)
usersRouter.post('/', postUsersHandler)
usersRouter.put('/:id', putUsersHandler)
usersRouter.delete('/:id', deleteUsersHandler)