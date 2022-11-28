const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

//!route

const pageRoute = require('./routes/pageRoute');
const quizRoute = require('./routes/quizRoute');
const kategoriRoute = require('./routes/kategoriRoute');


const app = express();

//! connect db

mongoose.connect('mongodb+srv://ozermuharrem:1OTvASjkU8shISVN@cluster0.ppgp7fz.mongodb.net/besSinav-Db?retryWrites=true&w=majority').then(() => {
    console.log('db baglandı');
})

// mongoose.connect('mongodb://localhost/besSinav').then(() => {
//     console.log('db baglandı');
// })

//!temp engine 

app.set('view engine','ejs');

//! midllewares

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

//! routes

app.use('/', pageRoute);
app.use('/quiz', quizRoute);
app.use('/kategori', kategoriRoute);


const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log('server start'+" "+port);
})

//1OTvASjkU8shISVN