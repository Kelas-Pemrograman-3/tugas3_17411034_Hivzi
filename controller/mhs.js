const mahasiswamodels = require('../models/Mahasiswa')

exports.insertmahasiswa = (data) =>
new Promise((resolve,reject) => {
    mahasiswamodels.create(data)
    .then (res => {
        resolve({
            error : false,
            pesan : 'berhasil input data'
        })
    })
    .catch(() =>{
        reject ({
            error : false,
            pesan : 'gagal input, coba lagi!'           
        })
    })
})