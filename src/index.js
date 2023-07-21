import express from "express";
import router from './Routes/index.js'
import { sequelize } from "./db.js";
import { router } from "./Routes/index.js";
import {
  Albums,
  Genres,
  Memberships,
  Playlists,
  Reviews,
  ShoppingCarts,
  Songs,
  Users,
  Products
} from './Models/relations.js'

const app = express()

//midelwares
app.use(express.json());

//rutas
app.use('/api', router)

sequelize.sync({force: true})
  .then(() => {
    app.listen(3001, () => {
      console.log("server on port 3001")
    })
  })
  .catch((error) => {
    console.log(error)
  })

  app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });
