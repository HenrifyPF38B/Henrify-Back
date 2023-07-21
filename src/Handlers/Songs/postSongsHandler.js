const postSongsHandler = async (req, res) => {
  try {
    const {name, artists, audio, image} = req.body
    const create = await postSong(name, artists, audio, image)
    return res.status(200).json(create)
  } 
  catch (error) {
    next(error)
  }

}

export default postSongsHandler