const expree = require('express');
const router = expree.Router();
const appController = require("../controllers/app_controller");

router.get('/', appController.home);

console.log('router is running');
module.exports = router;