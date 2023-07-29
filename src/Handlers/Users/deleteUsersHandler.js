import { deleteUserById } from "../../Controllers/Users.controllers.js";

const deleteUsersHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteUserById(id)
    if (!result.data) return res.status(400).json({ error: result });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  } 
}

export default deleteUsersHandler