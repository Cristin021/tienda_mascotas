const express = require('express');
const router = express.Router();
const controller = require('../controllers/mascotaController');

router.get('/', controller.getMascotas);
router.get('/:id', controller.getMascota);
router.post('/', controller.createMascota);
router.put('/:id', controller.updateMascota);
router.delete('/:id', controller.deleteMascota);

module.exports = router;