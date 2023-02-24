const sequelize=require('../db/connection');
const {DataTypes}=require('sequelize');
const userSchema=sequelize.define('user',{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports=userSchema;