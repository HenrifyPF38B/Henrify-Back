import Album  from '../Models/Album.js'

const postAlbum = async (name, artists, durationTotal, launchDate, totalSongs, image, price) => {
    const newAlbum = await Album.create({name, artists, durationTotal, launchDate, totalSongs, image, price })

    return { data: newAlbum }
}

const getAlbums = async () => {
    const albums = await Album.findAll()

    return { data: albums }

}

export default {postAlbum, getAlbums};