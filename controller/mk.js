const matakuliahmodels = require('../models/matakuliah')

exports.insertmk = (data) =>
new Promise((resolve,reject) => {
    matakuliahmodels.create(data)
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