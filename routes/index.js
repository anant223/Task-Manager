const expree = require('express');
const router = expree.Router();
const appController = require("../controllers/app_controller");

router.get('/', appController.home);
router.post('/create', appController.create);
router.get('/delete', appController.destory);

console.log('router is running');
module.exports = router;