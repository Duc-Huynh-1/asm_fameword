import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { AuthRouter, CateRouter, ProductRouter } from './routers/index.js'
import connect from './database/index.js'

dotenv.config()
const port = process.env.PORT || '3001'

const app = express();
app.use(cors());
app.use(express.json())

app.use('/product', ProductRouter)
app.use('/auth', AuthRouter)
app.use('/category', CateRouter)


app.listen(port, async () => {
    await connect()
    console.log(`Example app listening on port ${port}`)
})

