import express from 'express'
import router from './routes/index.js'
import 'dotenv/config'

const app = express()

app.use(express.json())
app.use(router)

app.listen(process.env.PORT, () => console.log(`server has been started in ${process.env.PORT}`))