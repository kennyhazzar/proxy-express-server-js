import express from 'express'
import router from './routes/index.js'
import 'dotenv/config'

const app = express()
const PORT = 8080

app.use(express.json())
app.use(router)

app.listen(PORT, () => console.log(`server has been started in ${PORT}`))