const express = require('express');
require('dotenv').config();
const connectDB = require('./db/connectDB');
const userRout = require("./routs/user")
const productRout = require("./routs/products")
const cookieParser = require("cookie-parser")
const cors = require('cors')

const app = express()

app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use("/user", userRout)
app.use("/products", productRout)

const start = async ()=>{
    await connectDB()
    app.listen( 5000, ()=>{
        console.log("connected to server...")
    })
}

start()