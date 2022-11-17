const mongoose = require('mongoose');
const QuizBank = require('../models/quizBank');
const Quzi = require('../models/quizBank');


exports.createQuiz = async (req,res) => {
    try {
       await Quzi.create(req.body);

        res.status(200).redirect('/quizPage');
    } catch (error) {
        res.status(400).json({
            status : "quiz oluşturulamadı",
            error
        })
    }
}

exports.getAllQuiz = async (req,res) => {
    try {
       
        const quiz = await Quzi.find()
        
        res.status(200).redirect('/quizPage', { 
            quiz,

        });
    } catch (error) {
        res.status(400).json({
            status : 'fail',
            error
        })
    }
}

exports.getRandomQuiz = (req,res) => {
    res.status(200).render('random')
}

exports.randomQuiz = async (req,res) => {
    try {
        let soruSayisi = req.body.soruSayisi;
        let randomSayi = [];
        let numara;
        for(let i = 0; i < soruSayisi; i++){
            numara = Math.ceil(Math.random()*10000)
            if(numara in randomSayi)
                    i--;
            else if (numara <= 1175)
               randomSayi[i] = numara;
            else
                i--;
        }
        for(let g in randomSayi)
        console.log(`random sayi oluşturuldu ${randomSayi[g]}`);
        let randomQuiz = [];
        
        let allQuiz = await Quzi.find();


        for(let x = 0; x < soruSayisi; x++)
        {
            randomQuiz[x] = allQuiz[randomSayi[x]]
        }
        console.log(randomQuiz);
        res.status(200).render('random', {
            randomQuiz
        })
    } catch (error) {
        res.status(400).json({
            status : 'fail',
            error
        })
    }

  
}