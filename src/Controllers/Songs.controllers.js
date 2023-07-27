import Song from '../Models/Song.js'

export const postSong = async (name, artists, audio, image) => {
    const newSong = await Song.create({name, artists, audio, image})

    return { data: newSong }
}

export const getSong = async () => {
    const songs = await Song.findAll()

    return { data: songs }
}