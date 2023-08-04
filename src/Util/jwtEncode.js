import { config } from 'dotenv'
const { JWT_SECRET_KEY } = config().parsed

import jwt from "jsonwebtoken";

export const generateToken = (id) =>{
  return jwt.sign({id}, JWT_SECRET_KEY);
};


// {expiresIn: "1d"}
