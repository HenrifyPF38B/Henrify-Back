import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const Orders = sequelize.define(
  "Orders",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    items: {
      type: DataTypes.TEXT,
      get: function () {
        return JSON.parse(this.getDataValue("artists"));
      },
      set: function (val) {
        return this.setDataValue("artists", JSON.stringify(val));
      }
    },
    shippingAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    billingAddress:{
      type: DataTypes.STRING,
      allowNull: false
    },
    shippingMethod:{
      type: DataTypes.STRING,
      allowNull: false
    },
    totalPrice:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    contactEmail:{
      type: DataTypes.STRING,
      allowNull: false
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    timestamps: false,
  }
);

  

  export default Orders;