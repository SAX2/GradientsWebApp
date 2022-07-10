const express = require("express");
const myconnection = require('express-myconnection');
const { create } = require('express-handlebars');
const session = require('express-session');
const mysql = require('mysql');
const app = express();
require('dotenv').config();

app.get('/',(req,res)=>{
    res.send('Hola')
});

const PORT = process.env.PORT || 4000;
app.listen(PORT,()=>console.log('up!🤩'));