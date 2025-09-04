const express = require("express");
const router = express.Router();
const upload = require("./../config/upload.js");
const productController = require("../controllers/productController");

router.get("/products", productController.getAllProducts);
router.get("/products/:id", productController.getProduct);
router.post("/products", upload.single("image"), productController.createProduct);
router.put("/products/:id", productController.updateProduct);
router.delete("/products/:id", productController.deleteProduct);

module.exports = router;