const QuizBank = require("../models/quizBank");


exports.getIndexPage =async (req,res) => {
    const totalQuiz = await QuizBank.find().countDocuments();
    res.status(200).render('index', {totalQuiz});
}

exports.getQuizPage = async (req,res) => {
    try {

        const page = req.query.page || 1; // başlangıç sayfası veya ilk sayfa
        const quizPerPage = 20; // her sayfada bulunacak fotograf sayısı
        const totalQuiz = await QuizBank.find().countDocuments(); // toplam fotograf sayısı
        const quiz = await QuizBank.find()
        .sort('SoruSayisi')
        .skip((page -1 ) * quizPerPage) // pas geçmek için
        .limit(quizPerPage); // her sayfada gösterilecke foğraf sayısı

        res.status(200).render('quizPage', {
            quiz,
            current:page,
            pages: Math.ceil(totalQuiz / quizPerPage)
        })
    } catch (error) {
        res.status(400).json({
            status : 'hata var',
            error
        })
    }
}