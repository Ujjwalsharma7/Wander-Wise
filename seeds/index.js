const mongoose = require("mongoose");
const Wanderground = require('../models/wanderGround');


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

const seedDB = async () => {{
    await Wanderground.deleteMany({});
    const w = new Wanderground({title: 'purple field'});
    await w.save();
}}
seedDB();