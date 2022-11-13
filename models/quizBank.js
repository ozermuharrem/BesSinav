const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizBankSchema = new Schema ({
    SoruSayisi :
    {
        type:Number,
        unique:true,
        required:true
    },
    SoruMetni : {
        type : String,
        required:true,
        trim : true
    },
    Cevap1 : {
        type : String,
        trim : true
    },
    Cevap2 : {
        type : String,
        trim : true
    },
    Cevap3 : {
        type : String,
        trim : true
    },
    Cevap4 : {
        type : String,
        trim : true
    },
    DogruCevap : {
        type : String,
        trim : true
    }
})

const QuizBank = mongoose.model('quiz',quizBankSchema);

module.exports = QuizBank;