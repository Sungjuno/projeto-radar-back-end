const express = require('express');
const router = express.Router();
const HomeController = require("../controllers/homeController")
const ClientesController = require("../controllers/clientesController");
const ProdutoController = require('../controllers/produtoController');

router.get('/', HomeController.index);

router.get('/clientes', ClientesController.index);
router.post('/clientes', ClientesController.create);
router.get('/clientes/:id', ClientesController.show);
router.delete('/clientes/:id', ClientesController.delete);
router.put('/clientes/:id', ClientesController.update);

router.get('/produtos', ProdutoController.index);
router.post('/produtos', ProdutoController.create);
router.get('/produtos/:id', ProdutoController.show);
router.delete('/produtos/:id', ProdutoController.delete);
router.put('/produtos/:id', ProdutoController.update);


module.exports = router;
