const express=require("express");
const userModel=require("../model")
const route=express.Router();

route.post('/', (req, res) => {
  console.log(req.body);
    console.log(true)
  // Create a new User instance from the request data
  const Data= new userModel({
    name: req.body.name,
    usn: req.body.usn,
    city: req.body.city
  });
// console.log(newUser);
  // Save the user data to the database
  try{
    Data.save()
  }catch(err){
    console.log(err.message)
  }finally{
    console.log("saved successfully")
  }
  
});



module.exports=route;