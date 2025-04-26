const express = require('express')
const mongoose = require('mongoose')
const app = express();

app.use(express.json());

port = 8000;

app.listen(port,()=>{
    console.log(`server running at ${port}`)
});

const users = [
    {email:"alice@example.com" , password:"alice123"},
    {email:"bob@example.com" ,password:"bob123"},
    {email:"charlie@example.com",password:"charlie123"},
];

app.put("/email",(req,res)=>{
    const email=req.params.email;
    const updatedData=req.body;

    const find = users.find(u => u.email === email);

    if(!find){
        return res.status(400).send("Email not found")
    }

    find.email = updatedData.eamil || find.email;
    find.password = updatedData.password || find.password;

    res.status(200).send("Data updated");
})

app.delete('/email',(req,res)=>{
    const email = req.params.email;
    const ind = users.findIndex(u=>u.email === email);

    if(ind === -1){
        return res.status(400).send("email not found");
    }
    users.splice(ind,1);
    res.status(200).send("User deleted successfully");
});