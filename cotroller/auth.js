const knex1 = require("../model/connection")

const express = require('express');
const path = require('path');
var bodyParser = require("body-parser");
let jwt = require('jsonwebtoken');
var app = express();

// var nJwt_data = require('njwt');


app.get('/loan_intro', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/user_details.html'));
});


app.get('/signup_page', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/sign_up.html'));
});

app.post("/sign_up",(req,re)=>{
    let coustomerDetails={
        name:req.body.fullname,
        email:req.body.email,
        password:req.body.password,
        repeat_pwd:req.body.repeat_pwd
    }
    let response = knex1.coustomerData(coustomerDetails)
    response.then((data)=>{
        // res.redirect("/loan_intro")
        res.send(data)
    }).catch((err)=>{
        console.log(err)
        res.send("erorrrr")
    })
})



app.listen(5000, () => {
    console.log("server started on port 5000")
})
