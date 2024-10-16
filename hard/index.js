const express=require("express");
const jwt=require("jsonwebtoken")
const app=express()
const JWT_SECRET="randomgeneratedword"
app.use(express.json())
const users=[]
app.post("/signup",function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    users.push({
        username:username,
        password:password
    })
    res.json({
        message:"You are signed up"
    })
    console.log(users)
    
})
app.post("/signin",function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    const foundUser=users.find(function(u){
        if(u.username==username && u.password==password){
            return true;

        }else{
            return false;
        }
    })
    if(foundUser){
        const token=jwt.sign({
            username:username,
        },JWT_SECRET)
        foundUser.token=token

        res.json({
            token:token
        })
        
    }else{
        res.status(403).send({
            message:"Invalid username or password"
        })
    }
    console.log(users);

})
app.get("/me",function(req,res){
    const token=req.headers.token//jwt
    const decodedInfo=jwt.verify(token,JWT_SECRET)//{username:"shivansh@gamil.com"}
    const username=decodedInfo.username
    let foundUser=null;
    for(let i=0;i<users.length;i++){
        if(users[i].username==username){
            foundUser=users[i]
        }
    }
    if(foundUser){
        res.json({
            username:foundUser.username,
            password:foundUser.password
        })
    }else{
        res.json({
            message:"invalid token"
        })
    }
})
app.listen(3000);