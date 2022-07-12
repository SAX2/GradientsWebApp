const express = require("express");
const myconnection = require('express-myconnection');
const { create } = require('express-handlebars');
const session = require('express-session');
const mysql = require('mysql');
const app = express();
require('dotenv').config();

//TODO:MYSQL
// app.use(myconnection(mysql, {
//     host: process.env.HOST,
//     database: process.env.DBNAME,
//     user: process.env.USER,
//     password: process.env.PASS
// }));

//TODO:HBS
const hbs = create({
    extname: '.hbs',
    partialsDir: ['views/components']
})
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");

//TODO:SESSION
app.set("trust proxy", 1);
app.use(session({
    secret: process.env.SECRETSESSION,
    resave: true,
    saveUninitialized: true,
    cookie: { 
        secure: true, 
        maxAge: 30 * 24 * 60 * 60 * 1000 
    }
}))

app.use('/public', express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/',require("./routes/home"));

const PORT = process.env.PORT || 4000;
app.listen(PORT,()=>console.log('up!🤩'));