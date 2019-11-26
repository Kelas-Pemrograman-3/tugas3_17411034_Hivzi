const matakuliah = require('express')()
const mkController = require('../controller/mk.js')

matakuliah.post('/insertmk', (req,res) =>{
    mkController.insertmk(req.body)
    .then(result =>{
        res.json(result)
    }).catch(err =>{
        res.json(err)
    })
})
module.exports = matakuliah