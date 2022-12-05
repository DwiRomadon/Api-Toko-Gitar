const express = require('express')
const app = express()
const mongoose = require('mongoose')
const mongoUrl = 'mongodb://localhost:27017/tokogitar1'
const cors = require('cors')

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Berhasil Connect Ke Database')
}).catch((e) => {
    console.log(e)
    console.log('Gagal Connect Ke Database')
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/user', require('./routes/user'))

app.listen(5001, () => {
    console.log('Berhasil Jalan')
})