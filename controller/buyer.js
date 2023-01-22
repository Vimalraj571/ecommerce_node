import express from 'express'
import { v4 as uuid_v4 } from "uuid";
import { userList, catalogList, productList, orderList as orders } from "./temp.js"

const buyerRouter = express.Router()

buyerRouter.get('/list-of-sellers', async (request, response) => {
    const sellerList = userList.filter(user => user.type === "seller")
    response.status(200).send(sellerList)
})

buyerRouter.get('/seller-catalog/:seller_id', async (request, response) => {
    const { params } = request
    const catalogListSeller = catalogList.find(c => c.seller_id === params.seller_id)

    let temp = []

    for (let item of catalogListSeller.catalog) {
        for (let product of productList) {
            if (item === product.id) {
                temp.push(product)
            }
        }
    }
    // response.send("/seller-catalog/:seller_id")
    response.status(200).send(temp)
})

buyerRouter.post('/create-order/:seller_id', async (request, response) => {
    const { products, buyer_id } = request.body

    const newOrder = { buyer_id, products, id: uuid_v4(), seller_id: request.params.seller_id }

    let orderList = orders.concat(newOrder)

    response.status(200).send(orderList)
    // response.send("/create-order/:seller_id")
})


export default buyerRouter