import { Router } from "express";
import getUsersHandler from "../Handlers/Users/getUsersHandler.js";
import getUsersByIdHandler from "../Handlers/Users/getUsersByIdHandler.js";
import postUsersHandler from "../Handlers/Users/postUsersHandler.js";
import putUsersHandler from "../Handlers/Users/putUsersHandler.js";
import deleteUsersHandler from "../Handlers/Users/deleteUsersHandler.js";
import { loginUserHandler } from "../Handlers/Users/loginUserHandler.js";
import { createUserHandler } from "../Handlers/Users/createUserHandler.js";
import { favsUserHandler } from "../Handlers/Users/favsUserHandler.js";
import { putUserCartHandler } from "../Handlers/Users/putUsersCatHandler.js";
import { googleAuthHandler } from "../Handlers/Users/googleAuthHandler.js";

export const usersRouter = Router()

usersRouter.post('/googleAuth', googleAuthHandler)
usersRouter.post('/login', loginUserHandler)
usersRouter.post('/register', createUserHandler)
usersRouter.put('/favs', favsUserHandler)
usersRouter.put("/cart", putUserCartHandler);
usersRouter.get('/:id',getUsersByIdHandler)
usersRouter.put('/', putUsersHandler);
usersRouter.delete('/:id', deleteUsersHandler);

/* usersRouter.get('/', getUsersHandler)
usersRouter.post('/', postUsersHandler)
usersRouter.put('/:id', putUsersHandler)*/