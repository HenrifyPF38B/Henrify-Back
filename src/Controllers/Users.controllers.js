import Users  from '../Models/Users.js'
import { Op } from "sequelize";


export const userLogin = async(user) =>{
  const { credential, password } = user;
 
  const findUserByEmail = await Users.findOne({
    where: {
      email: credential
    }
  });

  const findUserByUsername = await Users.findOne({
    where: {
      userName: credential
    }
  });

  if(!findUserByEmail && !findUserByUsername){
    return { data: "Email or Username incorrect" }; 
  };

  if(findUserByEmail || findUserByUsername){

    if(findUserByEmail?.password === password || findUserByUsername?.password === password){
      // Exito
      return {data: findUserByEmail ? findUserByEmail : findUserByUsername}
    }else{
      return { data: "Password Incorrect" }
    }
  };
 
}


export const userCreate = async(newUser) =>{

  const { email, userName } = newUser;

    const validateEmail = await Users.findAndCountAll({where:{email}});
    if(validateEmail.count > 0){
      return({data: "Email Error"});
    };

    const validateUsername = await Users.findAndCountAll({where:{userName}});
    if(validateUsername.count > 0){
      return({data: "UserName Error"});
    };

    const createUser = await Users.create(newUser);

    return {data: createUser};
}


export const userFavs = async(data) =>{
  const { userId, productId } = data;

  const findUser = await Users.findOne({
    where:{
      id: userId
    }
  });

  let userFavorites = findUser.dataValues.favorites;

  if(userFavorites.length === 0){
    userFavorites.push(productId);
  }else{
    let filter = userFavorites.filter(el => el !== productId);

    if(filter.length === userFavorites.length){
      userFavorites.push(productId);
    }else{
      userFavorites = filter;
    }
  }

  //console.log(userFavorites);

  const updateUser = await Users.update(
    {
    favorites: userFavorites
    },
    {
      where:{
        id: userId
      }
    }
  );

  return { data: updateUser };

};

export const userCart = async (data) => {
  const { userId, productId } = data;

  const findUser = await Users.findOne({
    where: {
      id: userId,
    },
  });

  let userCart = findUser.dataValues.cart;

  if (userCart.length === 0) {
    userCart.push(productId);
  } else {
    let filter = userCart.filter((el) => el !== productId);

    if (filter.length === userCart.length) {
      userCart.push(productId);
    } else {
      userCart = filter;
    }
  }

  const updateUser = await Users.update(
    {
      cart: userCart,
    },
    {
      where: {
        id: userId,
      },
    }
  );

  return { data: updateUser };
};