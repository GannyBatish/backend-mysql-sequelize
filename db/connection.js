const {Sequelize}=require('sequelize');
const dbConfig=require('./config');


const sequelize=new Sequelize(dbConfig.dbName,dbConfig.user,dbConfig.password,{
    host:dbConfig.host,
    dialect:dbConfig.dialect
})

sequelize.authenticate().then(()=>{
    console.log('Connected To Database');
}).catch((error)=>{
    console.log(error.message);
})
sequelize.sync({force:false}).then(()=>{
    console.log('Synced to Database')
}).catch((error)=>{
    console.log(error.message);
})

module.exports=sequelize;