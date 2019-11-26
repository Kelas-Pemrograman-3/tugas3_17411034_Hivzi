const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MahasiswaSchema = new Schema ({
    npm:{
        type: String
    },
    password:{
        type: String
    },
    nama:{
        type: String
    },
    programstudi:{
        type: String
    }
})
module.exports = mongoose.model('mahasiswa',MahasiswaSchema)