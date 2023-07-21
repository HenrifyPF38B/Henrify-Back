import {
  getAllAlbums,
  searchAlbums,
  getAlbumById,
  deleteAlbumById,
  createAlbum,
  modifyAlbum,
} from '../../Controllers/Albums.controllers.js'

//Obtener todos los albumnes

const getAlbumsHandler = async (req, res, next) => {
  const { name } = req.query

  const results = name ? await searchAlbums(name) : await getAllAlbums()
  try {
    res.status(200).json(results)
  } catch (error) {
    next(error)
  }
}

const getAlbumsByIdHandler = async (req, res, next) => {
  const { id } = req.params
  try {
    const album = await getAlbumById(id)
    res.status(200).json(album)
  } catch (error) {
    next(error)
  }
}

const deleteAlbumsHandler = async (req, res, next) => {
  const { id } = req.params

  try {
    const deletedAlbum = await deleteAlbumById(id)

    if (!deletedAlbum) {
      return res
        .status(404)
        .json({ message: `No se encontró el álbum con el ID ${id}` })
    }

    res.status(200).json({
      message: `El álbum con el ID ${id} ha sido eliminado correctamente`,
    })
  } catch (error) {
    next(error)
  }
}

const postAlbumsHandler = async (req, res, next) => {
  const {
    id,
    name,
    artists,
    durationTotal,
    launchDate,
    totalSongs,
    image,
    price,
    stock,
    deleted,
    SongId,
  } = req.body
  const newAlbum = await createAlbum(
    id,
    name,
    artists,
    durationTotal,
    launchDate,
    totalSongs,
    image,
    price,
    stock,
    deleted,
    SongId
  )
  try {
    res.status(201).json(newAlbum)
  } catch (error) {
    next(error)
  }
}

const putAlbumsHandler = async (req, res, next) => {
  const { id } = req.params

  try {
    const {
      name,
      artists,
      durationTotal,
      launchDate,
      totalSongs,
      image,
      price,
      stock,
      deleted,
      SongId,
    } = req.body

    const updatedAlbum = await modifyAlbum(
      id,
      name,
      artists,
      durationTotal,
      launchDate,
      totalSongs,
      image,
      price,
      stock,
      deleted,
      SongId
    )

    res.status(200).json(updatedAlbum)
  } catch (error) {
    next(error)
  }
}

export {
  getAlbumsByIdHandler,
  getAlbumsHandler,
  deleteAlbumsHandler,
  postAlbumsHandler,
  putAlbumsHandler,
}
