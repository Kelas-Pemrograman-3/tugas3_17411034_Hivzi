const mongoose = require('mongoose')
const Schema = mongoose.Schema

const matakuliahSchema = new Schema ({
    kodemk:{
        type: String
    },
    namamk:{
        type: String
    },
    sks:{
        type: Number
    },
    ruangan:{
        type: String
    },
    jam:{
        type: String
    },
    dosen:{
        type: String
    },
})
module.exports = mongoose.model('matakuliah',matakuliahSchema)