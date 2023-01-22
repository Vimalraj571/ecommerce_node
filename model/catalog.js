import mongoose from 'mongoose'

// {
//     id: 1,
//     seller_id: "ed8a465b-18c7-42f0-99b3-74d07fde48a2",
//     catalog: [1, 4],
// },

const catalogSchema = new mongoose.Schema({
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    catalog: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
})

catalogSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform(doc, ret) {
        delete ret._id
    }
})

const Catalog = mongoose.model('Catalog', catalogSchema)

export default Catalog
