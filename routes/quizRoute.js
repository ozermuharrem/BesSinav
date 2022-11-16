const express = require('express');
const router = express.Router();

const quizController = require('../controller/quizController');

router.route('/').post(quizController.createQuiz);
router.route('/quizPage').get(quizController.getAllQuiz);
router.route('/random').post(quizController.randomQuiz);
router.route('/random').get(quizController.getRandomQuiz);



module.exports = router;