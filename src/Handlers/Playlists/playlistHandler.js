import {
  getAllPlaylists,
  searchPlaylists,
  getPlaylistById,
  deletePlaylistById,
  createPlaylist,
  modifyPlaylist,
} from '../../Controllers/Playlists.controllers.js'

export const getPlaylistsHandler = async (req, res) => {
  const { name } = req.query
  try {
    const results = name ? await searchPlaylists(name) : await getAllPlaylists()
    res.status(200).json(results)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error interno del servidor' })
  }
}
export const getPlaylistsByIdHandler = async (req, res) => {
  const { id } = req.params
  try {
    const playlist = await getPlaylistById(id)
    if (!playlist) {
      return res
        .status(404)
        .json({ message: `Lista de reproducción con ID ${id} no encontrada` })
    }
    res.status(200).json(playlist)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error interno del servidor' })
  }
}
export const postPlaylistsHandler = async (req, res) => {
  const { playlistId, name, type, owner, tracks, image, price } = req.body
  try {
    const newPlaylist = await createPlaylist(
      playlistId,
      name,
      type,
      owner,
      tracks,
      image,
      price
    )
    res.status(201).json(newPlaylist)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error interno del servidor' })
  }
}

export const deletePlaylistsHandler = async (req, res) => {
  const { id } = req.params
  try {
    const deletedPlaylist = await deletePlaylistById(id)
    if (!deletedPlaylist) {
      return res
        .status(404)
        .json({ message: `Lista de reproducción con ID ${id} no encontrada` })
    }
    res.status(200).json({
      message: `Lista de reproducción con ID ${id} ha sido eliminada correctamente`,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error interno del servidor' })
  }
}

export const putPlaylistsHandler = async (req, res) => {
  const { id } = req.params
  const { playlistId, name, type, owner, tracks, image, price } = req.body

  try {
    const updatedPlaylist = await modifyPlaylist(id, {
      playlistId,
      name,
      type,
      owner,
      tracks,
      image,
      price,
    })
    if (!updatedPlaylist) {
      return res
        .status(404)
        .json({ message: `Lista de reproducción con ID ${id} no encontrada` })
    }
    res.status(200).json(updatedPlaylist)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error interno del servidor' })
  }
}
