const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const PORT = 5000
const authRoute = require('./routes/auth')



dotenv.config()
app.use(express.json())

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(console.log("Connected to mongoDB")).catch(err=>console.log(err))


app.use('/api/auth', authRoute)

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})