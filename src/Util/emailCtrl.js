import { config } from 'dotenv'
const { MAIL_ID, MAIL_PASSWORD } = config().parsed


import nodemailer from "nodemailer";
import asyncHandler from "express-async-handler";


export const sendMail = asyncHandler(async(data, req, res) =>{
try{
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
      user: MAIL_ID, 
      pass: MAIL_PASSWORD, 
    },
  });

  let info = await transporter.sendMail({
    from: '"Hi! We are Soul Music!" ', 
    to: data.to, 
    subject: data.subject,
    text: data.text,
    html: data.htm, 
  });

}catch(err){
  throw new Error(err.message);
}

});

