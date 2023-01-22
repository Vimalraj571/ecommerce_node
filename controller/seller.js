import express from 'express'
import { v4 as uuid_v4 } from "uuid";
import { productList as cat, orderList as orders } from "./temp.js"

let productList = cat
let orderList = orders

const sellerRouter = express.Router()

sellerRouter.post('/create-catalog', async (request, response) => {
    const { seller_id, catalogs } = request.body

    let newCat = {}
    for (let cat of catalogs) {
        newCat = { ...cat, id: uuid_v4() }
        productList = productList.concat(newCat)
    }
    console.log(productList)
    response.status(200).send(productList)
    // response.send("create-catalog")
})

sellerRouter.get('/orders', async (request, response) => {
    // get id from the request header auth 
    // filter order based on the seller id
    const sellerOrder = orderList.filter(o => o.seller_id === "9e524f61-947a-4510-95d7-89f5d4fea87d")
    response.status(200).send(sellerOrder)
    // response.send("orders")
})

export default sellerRouter
