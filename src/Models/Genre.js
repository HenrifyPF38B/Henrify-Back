import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const Genre = sequelize.define('Genre', {
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

  export default Genre;