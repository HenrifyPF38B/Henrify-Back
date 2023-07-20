import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const Album = sequelize.define('Album', {
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
    durationTotal:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    launchDate:{
      type: DataTypes.STRING,
      allowNull: false
    },
    totalSongs:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false
    },
    price:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    genero:{
      type: DataTypes.STRING,
      allowNull: false
    },
    deleted:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }, 
  })

  

  export default Album;