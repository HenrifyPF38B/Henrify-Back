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
<<<<<<< HEAD
    duration:{
      type: DataTypes.STRING,
      allowNull: true,
    },
=======
>>>>>>> a2771101fe6f76d6f680709d7310ecc7b5e3fcd5
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

  export default Songs;