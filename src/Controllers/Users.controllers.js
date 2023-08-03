import Albums from '../Models/Albums.js';
import Playlists from '../Models/Playlists.js';
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

    return {data: "User created"};
}

export const googleAuth = async(newUser) =>{
  const findUser = await Users.findOne({
    where:{
      email: newUser.email
    }
  });

  if(findUser){
    return {data: findUser};
  }else{
    const createUser = await Users.create(newUser);

    // return {data: "User created"};

    return {data: {msg: "User created", user: createUser.dataValues}}
  }
};

export const userFavs = async(data) =>{
  const { userId, productId } = data;

  const findUser = await Users.findOne({
    where:{
      id: userId
    }
  });

  
  let userFavorites = findUser.dataValues.favorites || [];

  if(userFavorites?.length === 0){
    userFavorites?.push(productId);
  }else{
    let filter = userFavorites?.filter(el => el !== productId);

    if(filter?.length === userFavorites?.length){
      userFavorites?.push(productId);
    }else{
      userFavorites = filter;
    }
  }

  console.log(userFavorites);

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
  const { userId, product } = data;

  const findUser = await Users.findOne({
    where: {
      id: userId,
    },
  });

  
  let userCart = JSON.parse(findUser.dataValues.cart) || [];
  

  if(userCart?.length === 0){
    userCart?.push(product);

  }else{
    let filter = userCart?.filter(el => el.name !== product.name);

    if(filter?.length === userCart?.length){
      userCart?.push(product);
    }else{
      userCart = filter;
    }
  }

  console.log(userCart);

  const updateUser = await Users.update(
    {
    cart: userCart
    },
    {
      where:{
        id: userId
      }
    }
  );

  return { data: updateUser };
};

export const getUsersById = async(id) =>{
  const findUser = await Users.findOne({
    where: {
      id: id
    }
  });

  if(!findUser){
    return { data: "No user found"};
  };

  return { data: findUser };
};


export const updateUser = async(data) =>{

  const { userId, newData } = data;
  console.log(newData);
  const findUser = await Users.findOne({
    where: {
      id: userId
    }
  });

  if(!findUser){
    return { data: "No user found"};
  }

  if(newData.email){
    findUser.update({
      userName: newData.userName,
      email: newData.email,
      firstName: newData.firstName,
      lastName: newData.lastName
    });
  
    findUser.save();
  }else{
    findUser.update({
      password: newData.password
    });
  
    findUser.save();
  }

  return { data: "User updated" };
};


export const deleteUser = async(userId) =>{
  const findUser = await Users.findOne({
    where: {
      id: userId
    }
  });

  if(!findUser){
    return {data: "No user found"};
  };

  await findUser.update({
    deleted: true
  });

  return {data: "User deleted"};
};

export const getAllUsers = async () => {
  const data = await Users.findAll()
  const total = data.length
  let activos = 0
  let desactivados = 0

  for(let value of data){
    if(value.deleted === false) activos ++;
    else { desactivados ++ }
  }

  return {
    total,
    activos,
    desactivados,
    data
  }
}