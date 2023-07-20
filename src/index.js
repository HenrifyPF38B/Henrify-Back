import express from "express";
import router from './Routes/index.js'
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

sequelize.sync({force: false}).then(() => {
  app.listen(3001, () => {
    console.log("server on port 3001")
  })
})

app.use(express.json());
app.use('/', router);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});