const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Wanderground = require('./models/wanderGround');


mongoose.connect('mongodb://127.0.0.1:27017/wander-wise', {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("database connected");
})
const app = express();

app.set("view engine", 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get("/", (req, res) => {
    res.render('home')
})
app.get("/makewanderground", async(req, res) => {
    const Wander = new Wanderground({title: 'My Backyard', description: 'cheap wandering!'});
    await Wander.save();
    res.send(Wander)
})

app.listen(3000, ()  =>{
    console.log("Server running on port 3000");
})