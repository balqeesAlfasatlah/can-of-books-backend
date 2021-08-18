'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');
const app = express();
app.use(cors());
const {req,res}= require('express');
const reFormSchema = require('./schemas');


const PORT = process.env.PORT || 3005;

mongoose.connect("mongodb://localhost:27017/books" ,{
  useNewUrlParser : true ,
  useUnifiedTopology : true
});

function bookCollection(){
  const balqees = new reFormSchema.userModel({
    email : "balqeesalfasatlah1@gmail.com",
    books : [
      {
        name : "An Infinte Faith" ,
        description :"For a group of scientists their Christian faith is put to the ultimate test. Going back in time to find the true meaning of faith in Christ.",
        states : "Jeff Coulter" ,
        img : "https://img1.wsimg.com/isteam/ip/381dbccb-0133-4b6e-8171-214b9cf31864/Infinite%20Faith%20Thumbnail.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:388,h:194,cg:true"
      } ,
      {
        name : "Angels Unaware" ,
        description :"If ever there is a perfect day it is this day. A day of early dawn and golden sunshine. A solemn figure standing at the Griffith Observatory, overlooking the city.",
        states : "Jeff Coulter" ,
        img : "https://img1.wsimg.com/isteam/ip/381dbccb-0133-4b6e-8171-214b9cf31864/Angels%20Cover.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:388,h:194,cg:true"
      } ,
      {
        name : "The Thin Blue Cross" ,
        description :"As cops it’s sometimes difficult to maintain a positive outlook on life. You’re dealt every negative aspect that life has to offer, even on the inside of the Thin Blue Line.",
        states : "Jeff Coulter" ,
        img : "https://img1.wsimg.com/isteam/ip/381dbccb-0133-4b6e-8171-214b9cf31864/The%20Thin%20Blue%20Cross%20Front%20Book%20Cover-page-001.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:388,h:194,cg:true"
      } ,
    ] ,
  });
  balqees.save();
  return balqees;
  
}


//bookCollection();
app.get("/books",(req, res)=>{
  let {email}= req.query;
 console.log(email)
  reFormSchema.userModel.findOne({email : email} ,(error ,userData)=>{
    if(error){
      res.send('didnt working');
    }else{
      console.log(userData);
      res.send(userData);
      
    }
  })
} );



app.listen(PORT, () => console.log(`listening on ${PORT}`));
