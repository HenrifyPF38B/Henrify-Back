import { Router } from "express";
import getMembershipsHandler from "../Handlers/Memberships/getMembershipsHandler.js";
import getMembershipsByIdHandler from "../Handlers/Memberships/getMembershipsByIdHandler.js";
import postMembershipsHandler from "../Handlers/Memberships/postMembershipsHandler.js";
import putMembershipsHandler from "../Handlers/Memberships/putMembershipsHandler.js";
import deleteMembershipsHandler from "../Handlers/Memberships/deleteMembershipsHandler.js";

export const membershipsRouter = Router()

membershipsRouter.get('/', getMembershipsHandler)
membershipsRouter.get('/:id',getMembershipsByIdHandler)
membershipsRouter.post('/:', postMembershipsHandler)
membershipsRouter.put('/:id', putMembershipsHandler)
membershipsRouter.delete('/:id', deleteMembershipsHandler)