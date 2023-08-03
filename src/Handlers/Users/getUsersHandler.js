import { getAllUsers } from "../../Controllers/Users.controllers.js";


const getUsersHandler = async (req, res) => {
  return res.send('getUsersHandler');
  const data = await getAllUsers()
  return res.status(200).json(data)
}

export default getUsersHandler