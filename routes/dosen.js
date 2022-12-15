// (5) Buat router Mahasiswa
const express = require('express')
const router = express.Router()
const Dosen = require('../models/Dosen')

// Create 
router.post('/', async (req, res) => {
    // tampung input mahasiswa 
    const dosenPost = new Dosen({
        nama: req.body.nama,
        alamat: req.body.alamat,
        nip: req.body.nip
    })

    try {
        // simpan data 
        const dosen = await dosenPost.save()
        // response
        res.json(dosen)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

router.get('/', async (req, res) => {
    try {
        const dosen = await Dosen.find()
        res.json(dosen)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

module.exports = router