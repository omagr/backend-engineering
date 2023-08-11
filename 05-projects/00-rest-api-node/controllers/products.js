const Product = require("../models/prodcuts");
const asyncHandler = require('express-async-handler')

const get_Products = asyncHandler(async (req, res) => {
    try {
        const product = await Product.find({})
        res.status(200).json(product)
    } catch (error) {
        res.status(500);
        throw new Error(error.message)
    }
})

const set_A_Product = asyncHandler(async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500);
        throw new Error(error.message)
    }
})

const get_A_Product = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500);
        throw new Error(error.message)
    }
})

const delete_A_Product = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id)
        if (!product) return res.status(404).json({ message: `product is not found - ${id}` })
        res.status(200).json(product)
    } catch (error) {
        res.status(500);
        throw new Error(error.message)
    }
})

const update_A_Product = asyncHandler(async (req, res) => {
    try {
        const { id, body } = req.params;
        const product = await Product.findByIdAndUpdate(id, body)
        if (!product) return res.status(404).json({ message: `product is not found - ${id}` })
        const updatedproduct = await Product.findById(id)
        res.status(200).json(updatedproduct)
    } catch (error) {
        res.status(500);
        throw new Error(error.message)
    }
})

module.exports = {
    get_A_Product, set_A_Product, update_A_Product, delete_A_Product, get_Products
}