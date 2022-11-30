const express = require('express');
const router = express.Router();
const HomeController = require("../controllers/homeController")
const ClientesController = require("../controllers/clientesController")

//rotas clientes
router.get('/clientes', ClientesController.index);
router.post('/clientes', ClientesController.create);
router.get('/clientes/:id', ClientesController.show);
router.delete('/clientes/:id', ClientesController.delete);
router.put('/clientes/:id', ClientesController.update);


module.exports = router;
