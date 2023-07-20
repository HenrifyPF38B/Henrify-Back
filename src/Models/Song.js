import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const Songs = sequelize.define('Songs', {
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
      allowNull: false,
    },
    launchDate:{
      type: DataTypes.DATEONLY,
      allowNull: false
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

  export default Songs;