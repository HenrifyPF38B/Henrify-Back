import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const Genres = sequelize.define('Genres', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    }
  })

  export default Genres;