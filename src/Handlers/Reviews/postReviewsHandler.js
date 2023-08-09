import { postReviews } from '../../Controllers/Reviews.controllers.js'

const postReviewsHandler = async (req, res, next) => {
  try {
    const { comment, rating, UserId} = req.body
    const data = await postReviews(comment, rating, UserId)
    if(!data)return res.status(400).json({ error: data });
    return res.status(200).json({ data: "review created" });
  } 
  catch (error) {
    next(error)
  }
}

export default postReviewsHandler