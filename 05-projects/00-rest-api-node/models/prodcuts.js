const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    name: {
        type: 'String',
        required: [true, "Enter A product Name"]
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    Price: {
        type: Number,
        required: true
    },
    image: {
        type: 'String',
        required: false,

    },
}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;