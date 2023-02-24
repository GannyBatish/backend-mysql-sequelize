const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');
const sequelize=require('./db/connection');
const userRouter=require('./router/userRouter');

const app=express();
dotenv.config();

app.use(cors())
app.options("*",cors());
app.use(express.json());

app.use('/auth',userRouter);

const PORT=process.env.PORT;
app.listen(PORT,console.log(`Listening at PORT http://localhost:${PORT}`))