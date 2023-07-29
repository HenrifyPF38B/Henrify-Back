import Playlists from '../Models/Playlists.js'
import { Sequelize } from 'sequelize'

export const getAllPlaylists = async () => {
  const playlists = await Playlists.findAll({
    where: { deleted: false },
  })

  return playlists
}

export const searchPlaylists = async (name) => {
  const normalizedQuery = name.toLowerCase()
  const databasePlaylists = await Playlists.findAll({
    where: Sequelize.where(
      Sequelize.fn('lower', Sequelize.col('name')),
      'LIKE',
      `%${normalizedQuery}%`
    ),
    limit: 15,
  })

  if (databasePlaylists.length === 0) {
    return 'No se encontraron listas de reproducción.'
  }

  return databasePlaylists
}

export const getPlaylistById = async (id) => {
  const playlist = await Playlists.findByPk(id)

  if (!playlist) {
    return {
      message: `No se encontró la lista de reproducción con el ID ${id}`,
    }
  }

  return playlist
}

export const deletePlaylistById = async (id) => {
  const playlist = await Playlists.findByPk(id)

  if (!playlist) {
    return null
  }

  playlist.deleted = true
  await playlist.save()

  return playlist
}

export const createPlaylist = async (
  playlistId,
  name,
  type,
  owner,
  tracks,
  image,
  price
) =>
  await Playlists.create({
    playlistId,
    name,
    type,
    owner,
    tracks,
    image,
    price,
  })

export const modifyPlaylist = async (
  id,
  { playlistId, name, type, owner, tracks, image, price }
) => {
  const playlist = await Playlists.findByPk(id)

  if (!playlist) {
    throw new Error(`No se encontró la lista de reproducción con el ID ${id}`)
  }
  if (playlistId) playlist.playlistId = playlistId
  if (name) playlist.name = name
  if (type) playlist.type = type
  if (owner) playlist.owner = owner
  if (tracks) playlist.tracks = tracks
  if (image) playlist.image = image
  if (price) playlist.price = price

  await playlist.save()

  return playlist
}
