import express from "express";
import { sequelize } from "./db.js";
import {
  Album,
  Genre,
  Membership,
  Playlist,
  Reviews,
  ShoppingCart,
  Song,
  User,
  Products
} from './Models/relations.js'

const app = express()

sequelize.sync({force: true})
  .then(() => {
    app.listen(3001, () => {
      console.log("server on port 3001")
  })
  .catch((error) => {
    console.log(error)
  })
})