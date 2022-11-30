module.exports = class Produto {
    constructor(produto){
        this.id = produto?.id
        this.nome = produto?.nome
        this.descricao = produto?.descricao
        this.valor = produto?.valor 
        this.qtdEstoque = produto?.qtdEstoque
    }

    // metodos staticos
    static async apagarPorId(id){
        const listaProduto = await this.lista()
        const listaNovaProduto = []
        for(let i=0; i<listaProduto.length; i++){
            const produtoDb = listaProduto[i]
            if(produtoDb.id.toString() !== id.toString()){
                listaNova.push(produtoDb)
            }
        }
        Cliente.salvarJsonDisco(listaNovaProduto)
    }
    
    static async buscaPorId(id){
        const listaProduto = await this.lista()
        for(let i=0; i<listaProduto.length; i++){
            const produtoDb = listaProduto[i]
            if(produtoDb.id.toString() === id.toString()){
                return produtoDb
            }
        }

        return null
    }

    static async salvar(produto){
        const listaProduto = await this.lista()
        let exist = false
        for(let i=0; i<listaProduto.length; i++){
            const produtoDb = listaProduto[i]
            if(produtoDb.id.toString() === produto.id.toString()){
                produtoDb.nome = produto.nome
                produtoDb.descricao = produto.descricao
                produtoDb.email = produto.email
                produtoDb.valor = produto.valor
                produtoDb.qtdEstoque = produto.qtdEstoque
                exist = true
                break
            }
        }

        if(!exist){
            const objectLiteral = {...produto}
            listaProduto.push(objectLiteral)
        }

        Produto.salvarJsonDisco(listaProduto)
    }

    static async salvarJsonDisco(produto){
        const fs = require('fs');

        try {
            fs.writeFileSync('db/produtos.json', JSON.stringify(produto), {encoding: "utf8"});
        } catch (err) {
            console.error(err);
        }
    }

    static async lista(){
        let produtos = []
        const fs = require('fs');

        try {
            const jsonProdutos = fs.readFileSync('db/produtos.json', 'utf8');
            produtos = JSON.parse(jsonProdutos)
        } catch (err) {
            console.error(err);
        }
        
        return produtos
    }
}