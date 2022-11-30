const PedidosProduto = require("../modelos/pedidosProduto");

module.exports = {
    index: async (req, res, next) => {
        const pedidosProdutos = await PedidosProduto.lista()
        res.status(200).send(pedidosProdutos)
    },
    create: (req, res, next) => {
        const pedidosProduto = new PedidosProduto(req.body)
        pedidosProduto.id = new Date().getTime()
        PedidosProduto.salvar(pedidosProduto)
        res.status(201).send(pedidosProduto)
    },
    delete: (req, res, next) => {
        PedidosProduto.apagarPorId(req.params.id)
        res.status(204).send("")
    },
    update: async (req, res, next) => {
        let pedidosProdutoDb = await PedidosProduto.buscaPorId(req.params.id)
        if(!pedidosProdutoDb) return res.status(404).send({mensagem: "Pedidos de produto não encontrado"})

        const pedidosProduto = new PedidosProduto(req.body)
        pedidosProduto.id = pedidosProdutoDb.id
        PedidosProduto.salvar(pedidosProduto)
        res.status(200).send(pedidosProduto)
    },
    show: async (req, res, next) => {
        let pedidosProdutoDb = await PedidosProduto.buscaPorId(req.params.id)
        if(!pedidosProdutoDb) return res.status(404).send({mensagem: "Pedidos de produto não encontrado"})
        res.status(200).send(pedidosProdutoDb)
    }

};