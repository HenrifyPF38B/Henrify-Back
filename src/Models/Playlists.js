import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const Playlists = sequelize.define('Playlists', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: `Playlists`
    },
    deleted:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
  },
  {
    timestamps: false
  })

  export default Playlists;