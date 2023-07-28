import { DataTypes } from 'sequelize'
import { sequelize } from '../db.js'

const Albums = sequelize.define(
  'Albums',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
<<<<<<< HEAD
    launchDate:{
      type: DataTypes.STRING,
      allowNull: false
    },
    totalSongs:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image:{
=======
    artists: {
>>>>>>> a2771101fe6f76d6f680709d7310ecc7b5e3fcd5
      type: DataTypes.STRING,
      allowNull: false,
    },
    genres: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    launchDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    totalSongs: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
<<<<<<< HEAD
    stock:{
      type: DataTypes.STRING,
      allowNull: true
=======
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
>>>>>>> a2771101fe6f76d6f680709d7310ecc7b5e3fcd5
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
)

export default Albums
