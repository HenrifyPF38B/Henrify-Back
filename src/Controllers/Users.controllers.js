import Users  from '../Models/Users'
const Op = Sequelize.Op;


export const userLogin = async(user) =>{
  const { credential, password } = user;

  const findUser = await Users.findOne({
    [Op.or]:[
      {
        email: {
          [Op.eq]: credential
        }
      },
      {
        userName: {
          [Op.eq]: credential
        }
      }
    ]
  });

  // Si encuentra un usuario:
  if(findUser.email){
    if(findUser.password === password){
      // Exito
      return {data: findUser};
    }else{
      // Si encuentra usuario pero la contraseña no coincide:
      return {data: "Password Incorrect"}
    }

  }else{
    // Si no encuentra un usuario:
    return {data: "Email or Username Incorrect"}
  }
}


export const userCreate = async(newUser) =>{

  const { email, userName } = newUser;

    const validateEmail = await Users.findAndCount({email});
    if(validateEmail > 0){
      return({data: "Email Error"});
    };

    const validateUsername = await Users.findAndCount({userName});
    if(validateUsername > 0){
      return({data: "UserName Error"});
    };

    const createUser = await Users.create(newUser);

    return {data: createUser};
}
