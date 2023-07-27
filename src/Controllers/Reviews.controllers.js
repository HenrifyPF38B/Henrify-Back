import Reviews from '../Models/Reviews.js'
import Albums from '../Models/Albums.js'

export const getReviews = async () => {
  const data = await Reviews.findAll({
    where: {
      deleted: false
    }
  })
  return data
}

export const postReviews = async (comment, rating, userId, albumId) => {
  if( 
    typeof(comment) !== 'string' || comment.length < 1 ||
    typeof(rating) !== 'number' || rating.length < 1 ||
    typeof(userId) !== 'string' || comment.length < 1 ||
    typeof(albumId) !== 'number' || albumId.length < 1
    ) throw Error('Campos obligatorios sin completar')
  const data = await Reviews.create({ comment, rating })

  const findAlmbum = await Albums.findAll({where:{id: albumId}})
  console.log(findAlmbum)

  await data.addAlbumId(findAlmbum)
  
  return data
}