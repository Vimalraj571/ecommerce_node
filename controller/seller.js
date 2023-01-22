import express from 'express';
import jwt from 'jsonwebtoken';
import Product from '../model/product.js';
import Catalog from '../model/catalog.js';
import middleware from '../utils/middleware.js';

import Order from '../model/order.js';

const sellerRouter = express.Router()

sellerRouter.post('/create-catalog', middleware.userExtractor, async (request, response) => {
    const { catalogs } = request.body

    const decodeToken = jwt.verify(request.token, process.env.SECRET)
    if (!decodeToken.id) {
        return response.status(404).json({ error: 'token is missing or invalid' })
    }

    let catelogData = await Catalog.findOne({ sellerId: decodeToken.id })

    const promises = catalogs.map(async cat => {
        let productData = new Product({
            name: cat.name,
            price: cat.price,
        })
        let insertedProductData = await productData.save()
        catelogData.catalog = catelogData.catalog.concat(insertedProductData)
    })
    await Promise.all(promises).then(async () => {
        await catelogData.save()
    });

    response.status(200).send({ message: "Catalog Created Successfully" })
})

sellerRouter.get('/orders', middleware.userExtractor, async (request, response) => {
    const decodeToken = jwt.verify(request.token, process.env.SECRET)
    if (!decodeToken.id) {
        return response.status(404).json({ error: 'token is missing or invalid' })
    }
    let orders = await Order.find({ sellerId: decodeToken.id }).populate("products")
    response.status(200).send(orders)
})

export default sellerRouter
