//jshint esversion:6

const express=require("express");

const app=express();

app.get('/',(req,res,next) => {
       res.send("<h1>Hello world!</h1>");
       
});
app.get('/contact',(req,res) => {
    res.send("<p>CONTACT ME: sabyasanchib@gmail.com</p>")
});
app.get("/about",(req,res) => {
    res.send("<p>I'm sabyasanchi bhardwaj working as  a software trainee in think future technology</p>");
})
app.get('/hobbies',(req,res) => {
    res.send("<ul><li>c++</li><li>javascript</li><li>nodejs</li></ul>")
})
app.get("/idol",(req,res) => {
    res.send("<h1>My idol is none other than MS Dhoni..</h1>")
})

app.listen(3000,() => {
    console.log("welcome to port number 3000");
})