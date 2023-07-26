import { userCreate } from "../../Controllers/Users.controllers.js";


export const createUserHandler = async(req, res) =>{
  try{
    const createUser = await userCreate(req.body);

    if(createUser === "Email Error" || createUser === "UserName Error"){
      return res.status(401).json(createUser);
    }else{
      return res.status(200).json(createUser);
    }

  }catch(error){
    console.log(error);
  }
}