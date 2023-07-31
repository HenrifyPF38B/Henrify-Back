import Orders from "../Models/Orders.js";
import { ordersRouter } from "../Routes/orders.routes.js";


export const getUserOrders = async(userId) =>{
  const getOrders = await Orders.findAll({
    where:{
      userId
    }
  });

  if(!getOrders.length){
    return {data: "Orders empty"}
  };

  return {data: getOrders};
};

export const createOrder = async(order) =>{
  
  const createOrder = await Orders.create({
    userId: order.order.userId,
    items: order.order.items,
    shippingAddress: order.order.shippingAddress,
    billingAddress: order.order.billingAddress,
    shippingMethod: order.order.shippingMethod,
    totalPrice: order.order.totalPrice,
    contactEmail: order.order.contactEmail
  });

  return {data: "Success"};
};