import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const ShoppingCarts = sequelize.define('ShoppingCarts', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    state:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    rating:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  })

  export default ShoppingCarts;