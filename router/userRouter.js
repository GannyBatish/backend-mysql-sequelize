const express=require('express');
const router=express.Router();
const User=require('../model/userModal');
const joi=require('joi');

const userSchema=joi.object({
    name:joi.string().required().min(3),
    email:joi.string().email().required(),
    phone:joi.string().length(10),
})
router.post('/',async(req,res)=>{
    const {name,email,phone}=req.body;
    const {error}=await userSchema.validate({name,email,phone});
    if(error){
        return res.status(400).json(error.message);
    }
    const userExist=await User.findOne({where:{email}});
    if(userExist)
    {
        return res.status(401).json({message:'User Already Exist'});
    }
    const user=await User.create({name,email,phone});
    res.status(201).json(user);
})

router.get('/',async(req,res)=>{
    const users=await User.findAll();
    res.status(200).json(users);
})

router.get('/user/:id',async(req,res)=>{
    const {id}=req.params;
    const user=await User.findByPk(id);
    // const user=await User.findOne({where:{id}});
    if(!user){
        return res.status(400).json({message:'user not found'})
    }
    res.status(200).json(user);
})
module.exports=router;