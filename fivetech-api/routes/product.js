const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');
const auth = require('../middleware/authAdmin');
const multer = require('../middleware/multer-config');

router.post("/", auth, multer, productController.createProduct);
router.put("/:id", auth, multer, productController.modifyProduct);
router.delete("/:id", auth, productController.deleteProduct);
router.get("/:id", productController.getOneProduct);
router.get("/", productController.getAllProducts);
router.post("/search", productController.searchProduct);

module.exports = router;