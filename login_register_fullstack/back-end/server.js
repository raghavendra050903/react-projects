const express = require('express');
const app=express();
const port=8000;
const connectDB = require('./db/dbConnection');
const User = require('./db/user');
const cors = require('cors');


// enable cors
app.use(cors())


//middleware for parssing json

app.use(express.json());

//registration
app.post('/register',async(req,res)=>{
    try{
        const{username,password}=req.body;
        const user = new User({username,password});
        await user.save(); //it will be saved in mongodb
        res.status(201).json({message:'Registration successful'})

    }catch(error){
        console.log(error)
        res.status(500).json({error:'Registration failed'});
    }
})


//login
app.post('/login',async(req,res)=>{
    try{
        const{username,password}=req.body;
        const user=await User.findOne({username});

        if(!user){
            return res.status(401).json({error:'invalid username or password'});
        }

        if(user.password!==password){
            return res.status(401).json({error:'invalid username or password'});
        }

        res.status(200).json({message:'Login Successful'});
    }catch(error){
        res.status(500).json({error:'login failed'});
    }
})


connectDB();

app.listen(port,()=>{
console.log('Server is listening on port 8000');
})
