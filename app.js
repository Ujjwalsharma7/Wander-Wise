const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/wander-wise');


app.set("view engine", 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get("/", (req, res) => {
    res.render('home')
})

app.listen(3000, ()  =>{
    console.log("Server running on port 3000");
})