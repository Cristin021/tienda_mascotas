const express = require('express');
const router = express.Router();
const controller = require('../controllers/ordenController');

router.get('/', controller.getOrdenes);
router.get('/:id', controller.getOrden);
router.post('/', controller.createOrden);

module.exports = router;