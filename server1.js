const server = require('express')()
const port = 5000

 server.listen(port,function() {
 console.log('server started on port'+port)

//  let nilai = 90
//  let data = {
//      nama:'Anjani melenia',
//      npm:'17411020',
//      jurusan: 'sistem informasi',
//      kuliah:(namamatkul, nama) => {
//          console.log('Selamat Kuliah' + nama + ',dimatakuliah' + namamatkul)
//      }
//  }
//  data.kuliah('pemrograman III', data.nama)

let nilai= 90
let listmhs =[
{
    nama: 'Hivv',
    npm: '17411034'
},
{
    nama: 'Anjay maba',
    npm: '1234567890'
}
]
for (let i = 0; i < listmhs.length; i++) {
    console.log (listmhs[i]);
}
// }

// if(nilai > 80){
//     console.log('Nilai anda A')
// }else if(nilai > 70){
//     console.log('Nilai anda B')
// }else{
//     console.log('Nilai anda C')
// }

 })