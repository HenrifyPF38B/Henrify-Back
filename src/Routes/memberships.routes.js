import { Router } from "express";
import {getMembershipsHandler} from "../Handlers/Memberships/membershipsHandler.js";
import {getMembershipsByIdHandler} from "../Handlers/Memberships/membershipsHandler.js";
import {postMembershipsHandler} from "../Handlers/Memberships/membershipsHandler.js";
import {putMembershipsHandler} from "../Handlers/Memberships/membershipsHandler.js";
import {deleteMembershipsHandler} from "../Handlers/Memberships/membershipsHandler.js";

export const membershipsRouter = Router()

membershipsRouter.get('/', getMembershipsHandler)
membershipsRouter.get('/:id',getMembershipsByIdHandler)
membershipsRouter.post('/', postMembershipsHandler)
membershipsRouter.put('/:id', putMembershipsHandler)
membershipsRouter.delete('/:id', deleteMembershipsHandler)