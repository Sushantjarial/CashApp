const express=require('express');
const  router=express.Router();
const schema =require( '../zod.js');
const userModel=require('../db.js');
const jwt=require('jsonwebtoken');
const secretKey=require('../config.js');


router.post('/signup',async (req,res)=>{
    const body=req.body;
    const result=schema.safeParse(body);
    if(!result.success){
      return   res.status(400).json({
            error:result.error.errors,
            message:"Invalid input"
        })
    }
    

const check=await userModel.find({username:body.username,
    email:body.email
});
if(check.length>0){
    return res.status(400).json({
        message:"username or email alrady exists"
    })
}
const user=new userModel({
    username:body.username,
    password:body.password,
    email:body.email,
    firstname:body.firstname,
    lastname:body.lastname
})

await userModel.create(user);
const user_id=user._id;
const token=jwt.sign({user_id},secretKey);


return res.status(200).json({
    message:"User created successfully",
    token:token
})

})

router.post('/login',async (req,res)=>{
    
})



module.exports=router;