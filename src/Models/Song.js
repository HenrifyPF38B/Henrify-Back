import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const Song = sequelize.define('Song', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    artists:{
      type: DataTypes.STRING,
      allowNull: false
    },
    duration:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    launchDate:{
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    audio:{
      type: DataTypes.STRING,
      allowNull: false
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  export default Song;