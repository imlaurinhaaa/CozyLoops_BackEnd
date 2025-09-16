const productModel = require("../models/productModel");

const getAllProducts = async (req, res) => {
    try {
        const { category } = req.query;
        const products = await productModel.getProducts(category);
        if (products.length === 0) {
            return res.status(200).json({ message: "Não há produtos cadastrados." });
        }
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ message: "Erro ao buscar produtos." });
    }
};

const getProduct = async (req, res) => {
    try {
        const product = await productModel.getProductById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Produto não encontrado." });
        }
        res.json(product);
    } catch (error) {
        res.status(400).json({ message: "Erro ao buscar produto." })
    }
};

const createProduct = async (req, res) => {
    try {
        const image = req.file ? req.file.filename : null;
        const { category, name, description, difficulty_level, time, price, suggestion } = req.body;
        const newProduct = await productModel.createProduct(category, image, name, description, difficulty_level, time, price, suggestion);
        res.status(201).json(newProduct);
    } catch (error) {
        console.log(error);
        if (error.code === '23505') {
            res.status(400).json({ message: "Produto já existe." });
        }
        res.status(400).json({ message: "Erro ao criar produto." });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { category, image, name, description, difficulty_level, time, price, suggestion } = req.body;
        const updatedProduct = await productModel.updateProduct(req.params.id, category, image, name, description, difficulty_level, time, price, suggestion);
        if (!updatedProduct) {
            return res.status(404).json({ message: "Produto não encontrado." })
        }
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: "Erro ao atualizar produto." })
    }
};

const deleteProduct = async (req, res) => {
    try {
        const message = await productModel.deleteProduct(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(400).json({ message: "Erro ao deletar produto." })
    }
};

module.exports = { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct };