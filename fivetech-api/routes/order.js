const express = require('express');
const router = express.Router();
const auth = require('../middleware/authAdmin');
const orderController = require('../controllers/order');

router.post("/", auth, orderController.createOrder);
router.put("/:id", auth, orderController.modifyOrder);
router.delete("/:id", auth, orderController.deleteOrder);
router.get("/:id", auth, orderController.getOrder);
router.get("/", auth, orderController.getOrders);

module.exports = router;