// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create/', productsController.create); /* Renderiza el formulario de carga */
router.post('/', productsController.store); /* Captura los datos y los guarda en el servidor */


/*** GET ONE PRODUCT ***/ 
router.get('/:id/', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); /* Envía la información del producto especifico a la vista para renderizarla */
router.put('/:id', productsController.update); /* Captura y guarda los datos */


/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', productsController.destroy); 


module.exports = router;

/* Métodos HTTP */

// GET
// POST
// PUT
// DELETE