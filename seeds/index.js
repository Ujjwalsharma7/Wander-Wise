const mongoose = require("mongoose");
const Wanderground = require('../models/wanderGround');
const cities = require('./cities')
const {places, descriptors} = require('./seedHelpers')

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

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Wanderground.deleteMany({});
   for(let i =0; i<50 ; i++){
    const random1000 = Math.floor(Math.random() *1000);
    const wander = new Wanderground ({
        location: `${cities[random1000].city}, ${cities[random1000].state}`,
        title: `${sample(descriptors)} ${sample(places)}`
        
    })
   await wander.save();
}}
seedDB();