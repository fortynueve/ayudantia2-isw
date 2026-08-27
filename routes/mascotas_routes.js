const express = require('express');
const controller = require('../controllers/mascotas_controller');

const router = express.Router();

router.get('/', controller.obtenerMascotas);
router.get('/:id', controller.obtenerMascotaPorId);
router.post('/', controller.crearMascota);
router.put('/:id', controller.actualizarMascota);
router.delete('/:id', controller.eliminarMascota);

module.exports = router;
