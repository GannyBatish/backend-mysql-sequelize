const {Sequelize}=require('sequelize');
const dbConfig=require('./config');
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password:dbConfig.password
});

// simple query
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    connection.query(`CREATE DATABASE IF NOT EXISTS ${dbConfig.dbName}`, function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });

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