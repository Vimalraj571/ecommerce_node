import express from 'express';

import Catalog from '../model/catalog.js';
import Order from '../model/order.js';
import Product from '../model/product.js';
import User from '../model/user.js';

const buyerRouter = express.Router()

const productResolver = async (name) => {
    const product = await Product.findOne({ name: name })
    return product._id
}

const buyerResolver = async (name) => {
    const buyer = await User.findOne({ username: name })
    return buyer._id
}

buyerRouter.get('/list-of-sellers', async (request, response) => {
    const sellerList = await User.find({ type: "seller" })
    response.status(200).send(sellerList)
})

buyerRouter.get('/seller-catalog/:seller_id', async (request, response) => {
    const { params } = request

    const catelogList = await Catalog.findOne({ sellerId: params.seller_id }).populate("catalog", { price: 1, name: 1 })

    if (catelogList.catalog.length === 0) {
        return response.status(200).send({ message: "Sorry This seller don't have any product" })
    }
    response.status(200).send(catelogList)
})

buyerRouter.post('/create-order/:seller_id', async (request, response) => {
    const { products, buyer_id } = request.body

    const newOrder = new Order({ buyerId: buyer_id, products, sellerId: request.params.seller_id })

    await newOrder.save()

    response.status(200).send({ message: 'Ordered Successfully' })
})

export default buyerRouter