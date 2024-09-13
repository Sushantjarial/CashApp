const express=require('express');
const  router=express.Router();
const  authMiddleware=require('../authMiddleware.js');
const {updateSchema}=require('../zod.js');
const { userSchema, loginSchema } = require('../zod.js');
const userModel=require('../db.js');
const jwt=require('jsonwebtoken');
const secretKey=require('../config.js');

router.get("/signin",async(req,res)=>{
   const user= await userModel.find({
        
    })
    return res.send(JSON.stringify(user));
})

router.post('/signup',async (req,res)=>{
    const body=req.body;
    const result=userSchema.safeParse(body);
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
    const result=loginSchema.safeParse(req.body);
    if(!result.success){
        return res.status(400).json({
            error:result.error.errors,
            message:"Invalid inputs"
        })
    }
    const user=await userModel.findOne({username:req.body.username,
        password:req.body.password
    });
    if(!user){
        return res.status(400).json({
            message:"wrong username or password"
        })
    }
    const user_id=user._id;
    const token=jwt.sign({user_id},secretKey);
   
return res.status(200).json({
    message:"login successful",
    token:token
})
})

router.put('/update',authMiddleware,async(req,res)=>{
    const {success}=updateSchema.safeParse(req.body);
    if(!success){
        return res.status(400).json({
            message: "Invalid input",
        })
    }
    await userModel.updateOne( {
       
        _id: req.user_id
    },req.body);

    
    return res.status(200).json({
        message:"updated successfully"
    })

})



module.exports=router;