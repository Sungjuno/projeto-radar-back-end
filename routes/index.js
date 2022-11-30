const express = require('express');
const router = express.Router();
const ClientesController = require("../controllers/clientesController")
const ProdutosController = require("../controllers/produtosController")

//rotas clientes
router.get('/clientes', ClientesController.index);
router.post('/clientes', ClientesController.create);
router.get('/clientes/:id', ClientesController.show);
router.delete('/clientes/:id', ClientesController.delete);
router.put('/clientes/:id', ClientesController.update);

//rotas produtos
router.get('/produtos', ProdutosController.index);
router.post('/produtos', ProdutosController.create);
router.get('/produtos/:id', ProdutosController.show);
router.delete('/produtos/:id', ProdutosController.delete);
router.put('/produtos/:id', ProdutosController.update);




module.exports = router;
