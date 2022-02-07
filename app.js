import express from 'express'
import router from './routes/index.js'
import 'dotenv/config'

const app = express()

app.use(express.json())
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*'])
    res.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
    res.append('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})
app.use(router)

app.listen(process.env.PORT, () => console.log(`server has been started in ${process.env.PORT}`))