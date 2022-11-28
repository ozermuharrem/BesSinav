const Kategori = require('../models/Kategori');

exports.createKategori = async (req,res) => {
    try {
        await Kategori.create(req.body);
        res.status(201).redirect('/')
    } catch (error) {
        res.status(400).json({
            status : 'kategori oluşturulamadı',
            error
        })
    }
}
