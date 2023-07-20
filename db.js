import { Sequelize } from "sequelize"
import { config } from 'dotenv'
const { DB_USER, DB_PASSWORD, DB_HOST } = config().parsed

export const sequelize = new Sequelize('henrify', DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect:'postgres',
  logging: false,
  native: false
});