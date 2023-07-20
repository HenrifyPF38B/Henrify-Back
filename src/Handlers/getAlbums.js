import Album  from '../Models/Album.js'

const postAlbum = async (name, artists, durationTotal, launchDate, totalSongs, image, price, genero) => {
    const newAlbum = await Album.create({name, artists, durationTotal, launchDate, totalSongs, image, price, genero })

    return { data: newAlbum }
}

const getAlbums = async () => {
    const albums = await Album.findAll()

    return { data: albums }

}

export default {postAlbum, getAlbums};