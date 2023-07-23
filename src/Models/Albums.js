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
    artists: {
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
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
