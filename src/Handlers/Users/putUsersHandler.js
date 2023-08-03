
import { updateUser } from "../../Controllers/Users.controllers"

const putUsersHandler = async (req, res, next) => {
  const newData = req.body
  const id = req.params.id;

  try {
    const result = await updateUser( id, newData );
    res.status(200).json(result);
  } catch (error) {
    next(error)
  }
}

export default putUsersHandler