import Songs from './../Models/Songs.js'

export const getAllSongs = async () => {
  const songs = await Songs.findAll()

  return { data: songs }
}

export const getSongById = async (id) => {
  const song = await Songs.findByPk(id)

  if (!song) {
    return { message: `No se encontraron canciones con el ID ${id}` }
  }

  return song
}

export const deleteSongById = async (id) => {
  const song = await Songs.findByPk(id)

  if (!song) {
    return null
  }

  await song.destroy()
  return song
}
export const createSong = async (
  id,
  name,
  artists,
  audio,
  image,
  duration,
  launchDate
) => {
  const newSong = await Songs.create({
    id,
    name,
    artists,
    audio,
    image,
    duration,
    launchDate,
  })

  return newSong
}
