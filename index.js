import express from 'express'
import dotenv from 'dotenv'
import userRoute from './routes/userRoute.js'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'


const app = express()
app.use(cors())

dotenv.config()
app.use(bodyParser.json({ extended: true, limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: true }))


mongoose.connect(process.env.MONGO_DB, { useNewURLParser: true, useUnifiedTopology: true }).then(()=>app.listen(process.env.PORT || 5000,()=>console.log("Server started at PORT 5000"))).catch((error) => console.log(error))

app.use('/user',userRoute)





