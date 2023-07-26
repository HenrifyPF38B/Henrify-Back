import { userLogin } from "../../Controllers/Users.controllers.js";


export const loginUserHandler = async(req, res) =>{
  //return res.status(200).send("get user login");
  try {   
    
    
    const loginUser = await userLogin(req.body);
    //const {credential, password} = req.body
    //return res.status(200).send(credential + "password: " + password);

     if(loginUser.credential === "Email or Username Incorrect" || createUser === "Password Incorrect"){
      return res.status(401).json(loginUser);
    }else{
      return res.status(200).json(loginUser);
    } 

  }catch(error){
    console.log(error);
  } 
}