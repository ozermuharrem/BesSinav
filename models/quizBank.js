const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slugify  = require('slugify');


const quizBankSchema = new Schema ({
    Kategori:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Kategori'
    },
    KategoriAdi:{
        type : String
    },
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

// quizBankSchema.pre('validate',function(next){
//     this.slug = slugify(this.KategoriAdi,{
//         lower:true,
//         strict:true
//     })
//     next();
// })

const QuizBank = mongoose.model('quiz',quizBankSchema);

module.exports = QuizBank;