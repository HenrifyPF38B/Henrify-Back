import express from "express";
import { sequelize } from "./db.js";
import { router } from "./Routes/index.js";
import cors from "cors";
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
import { config } from 'dotenv'

const { PORT } = config().parsed


const app = express();
const port = PORT || 3001;

//midelwares
app.use(express.json());
app.use(cors())

//rutas
app.use('/api', router)

sequelize.sync({force: false})
  .then(() => {
    app.listen(port, () => {
      console.log("Server running on Railway")
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
