import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const Products = sequelize.define('Products', {
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
    quantity:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price:{
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })

  export default Products;