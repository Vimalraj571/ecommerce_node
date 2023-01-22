import express from 'express'
import cors from "cors"
import 'express-async-errors'

import buyerRouter from './controller/buyer.js'
import sellerRouter from './controller/seller.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/seller', sellerRouter)
app.use('/api/buyer', buyerRouter)

export default app
