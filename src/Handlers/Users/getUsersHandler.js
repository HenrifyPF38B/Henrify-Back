import { getUsers } from "../../Controllers/Users.controllers.js";


const getUsersHandler = async (req, res) => {
  try {
    const result = await getUsers()
    if (!result.data) return res.status(400).json({ error: result });
    res.status(200).json(result);

  } catch (error) {
    res.status(400).json({error: error.message});
  } 
}

export default getUsersHandler