const express = require('express');
const router = express.Router();
const auth = require('../middleware/authAdmin');
const categoryController = require('../controllers/category');

router.post("/", auth, categoryController.createCategory);
router.put("/:id", auth, categoryController.modifyCategory);
router.delete("/:id", auth, categoryController.deleteCategory);
router.get("/:id", auth, categoryController.getCategory);
router.get("/", auth, categoryController.getCategories);

module.exports = router;