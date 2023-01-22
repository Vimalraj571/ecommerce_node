import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import "express-async-errors"

import config from "./utils/config.js"
import middleware from './utils/middleware.js'

import buyerRouter from "./controller/buyer.js"
import sellerRouter from "./controller/seller.js"
import authRoute from "./controller/auth.js"

const url = config.URL.replace(/password/i, config.PASS)

console.log(url)

mongoose.set("strictQuery", false)

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch((error) => {
    console.log("Error Connection to MongoDB:", error.message)
  })

const app = express()

app.use(cors())
app.use(express.json())
app.use(middleware.tokenExtractor)

app.use("/api/seller", sellerRouter)
app.use("/api/buyer", buyerRouter)
app.use("/api/auth", authRoute)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

export default app
