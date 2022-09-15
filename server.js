const express = require("express");
const connectDB = require("./config/connectDB");
const  product  = require("./routes/product");

const app = express();

const PORT = process.env.PORT || 6000;

connectDB();

app.use(express.json());
app.use('/product',product)

  
app.listen(PORT, (err) => 
    err ? console.error(err) : console.log(`Server is Running on Port ${PORT}...`)
);