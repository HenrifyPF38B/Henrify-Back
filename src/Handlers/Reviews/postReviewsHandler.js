import { postReviews } from '../../Controllers/Reviews.controllers.js'

const postReviewsHandler = async (req, res, next) => {
  try {
    const { comment, rating, userId} = req.body
    const data = await postReviews(comment, rating, userId)
    if(!data.data)return res.status(400).json({ error: data });
    return res.status(200).json({ data: data})
  } 
  catch (error) {
    next(error)
  }
}

export default postReviewsHandler