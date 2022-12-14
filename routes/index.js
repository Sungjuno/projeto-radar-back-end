const express = require('express');
const router = express.Router();

//imports dos Controllers
const ClientesController = require("../controllers/clientesController")
const ProdutosController = require("../controllers/produtosController")
const PedidosController = require("../controllers/pedidosController")
const PedidosProdutosController = require("../controllers/pedidosProdutosController")

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

//rotas pedidos
router.get('/pedidos', PedidosController.index);
router.post('/pedidos', PedidosController.create);
router.get('/pedidos/:id', PedidosController.show);
router.delete('/pedidos/:id', PedidosController.delete);
router.put('/pedidos/:id', PedidosController.update);

//rotas pedidosProdutos
router.get('/pedidosProdutos', PedidosProdutosController.index);
router.post('/pedidosProdutos', PedidosProdutosController.create);
router.get('/pedidosProdutos/:id', PedidosProdutosController.show);
router.delete('/pedidosProdutos/:id', PedidosProdutosController.delete);
router.put('/pedidosProdutos/:id', PedidosProdutosController.update);


module.exports = router;
