import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const Reviews = sequelize.define('Reviews', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    comment:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  })

  export default Reviews;