import { userLogin } from "../../Controllers/Users.controllers";


export const loginUserHandler = async(req, res) =>{
  try{
    const loginUser = await userLogin(req.body);

    if(loginUser === "Email or Username Incorrect" || createUser === "Password Incorrect"){
      return res.status(401).json(loginUser);
    }else{
      return res.status(200).json(loginUser);
    }

  }catch(error){
    console.log(error);
  }
}