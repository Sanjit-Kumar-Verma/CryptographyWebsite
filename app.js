// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
// import express from 'express';
const express=require("express");
const path=require("path");
const fs=require("fs");
const app=express();
const mongoose = require('mongoose');
const port=80;
const bodyparser=require("body-parser")
// var popup=require('popups')
mongoose.connect('mongodb://localhost/feedbackEncrypto',{useNewUrlParser:true});

app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
var cons = require('consolidate');

// view engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
// app.set('view engine', 'pug') // Set the template engine as pug
// app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
//app.get('/feedback', (req, res)=>{
 //   res.status(200).render('feedback');
//})
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});


var feedbackSchema=new mongoose.Schema({
    name: String,
    email: String,
    contact: String,
    message: String,

});

var Feedback=mongoose.model('feedback', feedbackSchema);

app.get('/', (req, res)=>{
    res.status(200).render("index.html");
})
app.get("/feedback", (req,res)=>{
    res.status(200).render('feedback', {title: "hey sanjit", message:"hehwqeiueji"})
    // res.send("ok");
});

app.post('/feedback', (req, res)=>{
    var myData=new Feedback(req.body);
    myData.save().then(()=>{
        // popup.alert({
            // content: 'Hello!'
        // });
        res.render('feedback')
        
    }).catch(()=>{
        res.status(400).send("Feedback was not successfully saved")
    })

    // res.status(200).send("cool");
});






// setTimeout(round, 1500);
//         function round() {
//             setTimeout(one, 0000);
//             setTimeout(two, 857);
//             setTimeout(three, 1714);
//             setTimeout(four, 2571);
//             setTimeout(five, 3428);
//             setTimeout(six, 4285);
//             setTimeout(seven, 5142);
//             setTimeout(eight, 6000);
//             // setTimeout(normal, 9000);
//             setTimeout(line,0000)

//         }
//         function one() {
//             let a = document.getElementById("first");
//             a.style.visibility = "visible";
//         }
//         function two() {
//             let b = document.getElementById("second");
//             b.style.visibility = "visible";
//         }
//         function three() {
//             let c = document.getElementById("third");
//             c.style.visibility = "visible";
//         }
//         function four() {
//             let k = document.getElementById("fourth");
//             k.style.visibility = "visible";
//         }
//         function five() {
//             let l = document.getElementById("fifth");
//             l.style.visibility = "visible";
//         }
//         function six() {
//             let c = document.getElementById("sixth");
//             c.style.visibility = "visible";
//         }
//         function seven() {
//             let c = document.getElementById("seventh");
//             c.style.visibility = "visible";
//         }
//         function eight() {
//             let c = document.getElementById("eighth");
//             c.style.visibility = "visible";
//         }
//         function normal() {
//             let d = document.getElementById("first");
//             d.style.visibility = "hidden";
//             let e = document.getElementById("second");
//             e.style.visibility = "hidden";
//             let f = document.getElementById("third");
//             f.style.visibility = "hidden";
//             let g = document.getElementById("fourth");
//             g.style.visibility = "hidden";
//             let h = document.getElementById("fifth");
//             h.style.visibility = "hidden";
//             let i = document.getElementById("sixth");
//             i.style.visibility = "hidden";
//             let j = document.getElementById("seventh");
//             j.style.visibility = "hidden";
//             let y = document.getElementById("eighth");
//             y.style.visibility = "hidden";

//         }
//         // setInterval(line, 10000);
//         function line(){
//             let z = document.getElementById("line");
//             z.style.animation="underline 6.6s linear 0s 1 normal forwards running";
//             // z.style.animationDuration = 10000;
            
//         }
//     var rawdata=document.getElementById("raw-data")
//     var password=document.getElementById("enc-password")
//     var display1=document.getElementById("display1")
//     var endata = document.getElementById("cipher-data");
//     var password2 = document.getElementById("dec-password");
//     var display2 = document.getElementById("display2");
    
//     function encr() {
//         var rawdata=document.getElementById("raw-data")
//     var password=document.getElementById("enc-password")
//     var display1=document.getElementById("display1")
//     // var endata = document.getElementById("cipher-data");
//     // var password2 = document.getElementById("dec-password");
//     // var display2 = document.getElementById("display2");
    
//     display1.style.animation="left1 1.5s forwards";
//     display1.style.animationDuration= "1.5s"
//     var ciphertext = CryptoJS.AES.encrypt(rawdata.value, password.value);
//     display1.value = ciphertext.toString();
//     }
//     function decr(){
//     //     var rawdata=document.getElementById("raw-data")
//     // var password=document.getElementById("enc-password")
//     // var display1=document.getElementById("display1")
//     var endata = document.getElementById("cipher-data");
//     var password2 = document.getElementById("dec-password");
//     var display2 = document.getElementById("display2");
//         display2.style.animation="right1 1.5s forwards";
//             display2.style.animationDuration= "1.5s"
//         var Normaltext = CryptoJS.AES.decrypt(endata.value, password2.value);
//             // display2.value = Normaltext.toString(CryptoJS.enc.Utf8);
//             display2.value = Normaltext.toString(CryptoJS.enc.Utf8);
            
//         };
        
