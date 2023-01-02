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

mongoose.connect('mongodb://localhost:27017/sinav-db').then(() => {
    console.log('db baglandı');
})

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
