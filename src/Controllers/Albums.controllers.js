import Albums from '../Models/Albums.js'
import { Sequelize } from 'sequelize'


export const getAllAlbums = async () => {
  const albums = await Albums.findAll({
    where: { deleted: false },
  })

  return { data: albums }
}

export const searchAlbums = async (name) => {
  const normalizedQuery = name.toLowerCase()
  const databaseAlbums = await Albums.findAll({
    where: Sequelize.where(
      Sequelize.fn('lower', Sequelize.col('name')),
      'LIKE',
      `%${normalizedQuery}%`
    ),
    limit: 15,
  })

  if (databaseAlbums.length === 0) {
    return 'No se encontraron albums.'
  }
  return [...databaseAlbums]
}

export const getAlbumById = async (id) => {
  const album = await Albums.findByPk(id)

  if (!album) {
    return { message: `No se encontraron álbumes con el ID ${id}` }
  }

  return album
}

export const deleteAlbumById = async (id) => {
  const album = await Albums.findByPk(id)

  if (!album) {
    return null
  }

  album.deleted = true
  await album.save()

  return album
}

export const createAlbum = async (
  name,
  artists,
  genres,
  launchDate,
  totalSongs,
  image,
  price,
  stock,
) =>
  await Albums.create({
    name,
    artists,
    genres,
    launchDate,
    totalSongs,
    image,
    price,
    stock,
  })

export const modifyAlbum = async (
  id,
  name,
  artists,
  genres,
  launchDate,
  totalSongs,
  image,
  price,
  stock,
) => {
  const album = await Albums.findByPk(id)

  if (!album) {
    throw new Error(`No se encontró el álbum con el ID ${id}`)
  }

  if (name) album.name = name
  if (artists) album.artists = artists
  if (genres) album.genres = genres
  if (launchDate) album.launchDate = launchDate
  if (totalSongs) album.totalSongs = totalSongs
  if (image) album.image = image
  if (price) album.price = price
  if (stock) album.stock = stock

  await album.save()

  return album
}
