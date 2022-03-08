const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUsers);
router.get('/email/:userId', userController.getUserByEmail);
router.post('/', userController.createUser);
router.put('/:userId', userController.updateUser);

module.exports = router;
