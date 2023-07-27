import { Sequelize } from "sequelize"
import { config } from 'dotenv'
const { DB_DEPLOY } = config().parsed

export const sequelize = new Sequelize(
  DB_DEPLOY,
  {
  logging: false,
  native: false
});
