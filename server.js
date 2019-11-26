const server = require('express')()
const bodyparser= require('body-parser')
const mongoose= require('mongoose')
const port = 3000

const mongoURI = 'mongodb://127.0.0.1/DBlatihan'

mongoose.connect(mongoURI,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log('succses to connecting data base ')
}).catch(err =>{
    console.log('error:'+err)
})

server.use(bodyparser.json({
    extended: true,
    limit: '50mb'
}))

server.use(bodyparser.urlencoded({
    extended: true,
    limit: '50mb'
}))

server.use('/mahasiswa',require('./routes/mahasiswa.js'))
server.use('/matakuliah',require('./routes/matakuliah.js'))

// server.get('/user/register',(req,res)=>{
//     res.send('<h1>Halaman Registrasi</h1>')
// })

server.listen(port,function() {
    console.log('server started on port'+port)
})
    