const express = require('express');
const Kategori = require('../models/Kategori');
const kategoriController = require('../controller/kategoriController');


const router = express.Router();

router.route('/createKategori').post(kategoriController.createKategori);

module.exports = router;