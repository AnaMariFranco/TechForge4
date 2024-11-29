interface ProdutoLoja {
    codigo: number;
nome: string;
}

class Loja {
produtos: ProdutoLoja[] = [];

adicionarProduto(produto: ProdutoLoja): void {
        this.produtos.push(produto);
    }

    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
        return this.produtos.find(produto => produto.codigo === codigo);
    }
}

const loja = new Loja();

loja.adicionarProduto({ codigo: 1, nome: "blusa" });
loja.adicionarProduto({ codigo: 2, nome: "pulseira" });
loja.adicionarProduto({ codigo: 3, nome: "brinco" });

const produto1 = loja.buscarProdutoPorCodigo(2);
const produtoNaoEncontrado = loja.buscarProdutoPorCodigo(4);

console.log(produto1);
console.log(produtoNaoEncontrado);