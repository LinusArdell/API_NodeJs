// (1) definisikan modul
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

// (3) connect to mongodb
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser : true, useUnifiedTopology: true})
let db = mongoose.connection

db.on('error', console.log.bind(console,'Error establishing a database connection'))

db.once('open', () => {
    console.log('Database is connected');
})

// (2) Listen port
app.listen(process.env.PORT,()=> {
console.log(`server is running on port : ${process.env.PORT}`);
})