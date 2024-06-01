const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.API;

mongoose.connect(uri, {
}).then(() => {
    console.log('mongodb connected')
}).catch((err) => {
    console.log(err, "no connection")
})