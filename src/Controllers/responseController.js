import getAlbum from "../Handlers/getAlbums.js";
const postAlbum = getAlbum.postAlbum;
const getAlbums = getAlbum.getAlbums;


const postAlbumController = async (req, res, next) => {
    const {name, artists, durationTotal, launchDate, totalSongs, image, price, } = req.body

    // console.log('form',name, artists, durationTotal, launchDate, totalSongs, image, price )

    try {
        const create = await postAlbum(name, artists, durationTotal, launchDate, totalSongs, image, price)

        res.status(200).json(create)
    } catch (error) {
        next(error)
    }
}

const getAlbumsController = async (req, res, next) => {
    try{
        const albums = await getAlbums();

        res.status(200).json(albums);

    } catch (error) {
        next(error)
    }
}

export default {postAlbumController, getAlbumsController}
