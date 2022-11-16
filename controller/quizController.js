const mongoose = require('mongoose');
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

exports.cevapCheck = async (req,res)=>{

    try {
        const dogruCevap = await Quzi.findById(req.params._id)
    
       
        if(dogruCevap.DogruCevap == req.params[0])
            console.log('dogruCevabı Tututn');
            
        else
            console.log('yanlış cebap');
        
        console.log(req.params._id)
    
        res.redirect('/quizPage', {
            cevap: dagru
        });
        
    } catch (error) {
        res.status(400).json({
            status : 'dogru cevap kontrol',
            error
        })
    }
    
}