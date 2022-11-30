module.exports = class PedidosProduto {
    constructor(pedidosProduto) {
        this.id = pedidosProduto?.id
        this.pedido_id = pedidosProduto?.pedido_id
        this.produto_id = pedidosProduto?.produto_id
        this.valor = pedidosProduto?.valor
        this.quantidade = pedidosProduto?.quantidade
    }

    static async apagarPorId(id) {
        const listaPedidosProdutos = await this.lista()
        const listaNova = []
        for (let i = 0; i < listaPedidosProdutos.length; i++) {
            const pedidosProdutoDb = listaPedidosProdutos[i]
            if (pedidosProdutoDb.id.toString() !== id.toString()) {
                listaNova.push(pedidosProdutoDb)
            }
        }

        PedidosProduto.salvarJsonDisco(listaNova)
    }
    
    static async buscaPorId(id) {
        const listaPedidosProdutos = await this.lista()
        for (let i = 0; i < listaPedidosProdutos.length; i++) {
            const pedidosProdutoDb = listaPedidosProdutos[i]
            if (pedidosProdutoDb.id.toString() === id.toString()) {
                return pedidosProdutoDb
            }
        }

        return null
    }

    static async salvar(pedidosProduto) {
        const listaPedidosProdutos = await this.lista()
        let exist = false
        for (let i = 0; i < listaPedidosProdutos.length; i++) {
            const pedidosProdutosDb = listaPedidosProdutos[i]
            if (pedidosProdutosDb.id.toString() === pedidosProduto.id.toString()) {
                pedidosProdutosDb.pedido_id = pedidosProduto.pedido_id
                pedidosProdutosDb.produto_id = pedidosProduto.produto_id
                pedidosProdutosDb.valor = pedidosProduto.valor
                pedidosProdutosDb.quantidade = pedidosProduto.quantidade
                exist = true
                break
            }
        }

        if (!exist) {
            const objectLiteral = {...pedidosProduto}
            listaPedidosProdutos.push(objectLiteral)
        }

        PedidosProduto.salvarJsonDisco(listaPedidosProdutos)
    }

    static async salvarJsonDisco(pedidosProdutos) {
        const fs = require('fs');

        try {
            fs.writeFileSync('db/pedidosProdutos.json', JSON.stringify(pedidosProdutos), { encoding: "utf8" });
        } catch (err) {
            console.error(err);
        }
    }

    static async lista() {
        let pedidosProdutos = []
        const fs = require('fs');

        try {
            const jsonPedidosProdutos = await fs.readFileSync('db/pedidosProdutos.json', 'utf8');
            pedidosProdutos = JSON.parse(jsonPedidosProdutos)
        } catch (err) {
            console.error(err);
        }

        return pedidosProdutos
    }
}