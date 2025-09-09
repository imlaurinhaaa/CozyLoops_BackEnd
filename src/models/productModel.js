const pool = require("../config/database");

const getProducts = async () => {
    const result = await pool.query("SELECT * FROM products");
    return result.rows;
};

const getProductById = async (id) => {
    const result = await pool.query("SELECT * FROM products WHERE id = $1", [id]);
    return result.rows[0];
};

const createProduct = async (category, image, name, description, difficulty_level, time, price, suggestion) => {
    const result = await pool.query("INSERT INTO products (category, image, name, description, difficulty_level, time, price, suggestion) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
        [category, image, name, description, difficulty_level, time, price, suggestion]
    );
    return result.rows[0];
};

const updateProduct = async (id, category, image, name, description, difficulty_level, time, price, suggestion) => {
    const result = await pool.query("UPDATE products SET category = $1, image = $2, name = $3, description = $4, difficulty_level = $5, time = $6, price = $7, suggestion = $8 WHERE id = $9 RETURNING *",
        [category, image, name, description, difficulty_level, time, price, suggestion, id]
    );
    return result.rows[0];
};

const deleteProduct = async (id) => {
    const result = await pool.query("DELETE FROM products WHERE id = $1 RETURNING *", [id]);
    if (result.rowCount === 0) {
        return { error: "Produto não encontrado!" }
    }
    return { message: "Produto deletado com sucesso!" };
};

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };