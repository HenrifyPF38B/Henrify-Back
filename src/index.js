import express from 'express'
import { sequelize } from './db.js'
<<<<<<< HEAD
import { router } from './Routes/memberships.routes.js'
=======
import { router } from './Routes/index.js'
>>>>>>> a2771101fe6f76d6f680709d7310ecc7b5e3fcd5
import {
  Albums,
  Genres,
  Memberships,
  Playlists,
  Reviews,
  ShoppingCarts,
  Songs,
  Users,
  Products,
} from './Models/relations.js'
import cors from 'cors';


const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//rutas
app.use('/api', router)

sequelize
  .sync({ force: true })
  .then(() => {
    app.listen(3001, () => {
      console.log('server on port 3001')
    })
  })
  .catch((error) => {
    console.log(error)
  })

app.use((err, req, res, next) => {
  const status = err.status || 500
  const message = err.message || err
  console.error(err)
  res.status(status).send(message)
<<<<<<< HEAD
})
=======
})
>>>>>>> a2771101fe6f76d6f680709d7310ecc7b5e3fcd5
