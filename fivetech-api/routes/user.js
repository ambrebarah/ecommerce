const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.put("/:id", auth, userController.modifyUser);
router.delete("/:id", auth, userController.deleteUser);
router.get("/:id", auth, userController.getUser);
router.get("/", auth, userController.getUsers);

module.exports = router;