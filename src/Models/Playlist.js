import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const Playlist = sequelize.define('Playlist', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: `Playlist`
    }
  })

  export default Playlist;