import mongoose from 'mongoose'

// {
//     buyer_id: "ed8a465b-18c7-42f0-99b3-74d07fde48a1",
//     products: ["watch", "perfume"], // aka  product_ids
//     id: "76f0a0d3-e41f-4340-ac11-f011fc4ba582",
//     seller_id: "9e524f61-947a-4510-95d7-89f5d4fea87d",
// },

const orderSchema = new mongoose.Schema({
    buyerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
})

orderSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform(doc, ret) {
        delete ret._id
    }
})

const Order = mongoose.model('Order', orderSchema)

export default Order
