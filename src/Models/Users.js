import { DataTypes, UUIDV4 } from "sequelize";
import { sequelize } from "../db.js";

const Users = sequelize.define('Users', {
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    userName:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    admin:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    avatar:{
      type: DataTypes.STRING,
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

  export default Users;