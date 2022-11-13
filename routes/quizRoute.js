const express = require('express');
const router = express.Router();

const quizController = require('../controller/quizController');

router.route('/').post(quizController.createQuiz);
router.route('/quizPage').get(quizController.getAllQuiz);


module.exports = router;