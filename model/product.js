import mongoose from 'mongoose'

// {
//     name: "milk",
//     price: 50,
//     id: "ae706d9b-acbd-4223-be3b-39e563a8ac1f",
// }

const productSchema = new mongoose.Schema({
    name: String,
    price: Number
})

productSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform(doc, ret) {
        delete ret._id
    }
})

const Product = mongoose.model('Product', productSchema)

export default Product
