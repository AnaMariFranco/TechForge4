interface Livro {
    titulo: string;
autor: string;
disponivel: boolean;
}

class Biblioteca {
livros: Livro[] = [];

adicionarLivro(livro: Livro): void {
        this.livros.push(livro);
    }

    buscarLivrosDisponiveis(): Livro[] {
        return this.livros.filter(livro => livro.disponivel);
    }
}

const biblioteca = new Biblioteca();

biblioteca.adicionarLivro({ titulo: "Admirável Mundo Novo", autor: "Aldous Huxley", disponivel: true });
biblioteca.adicionarLivro({ titulo: "Fahrenheit 451", autor: "Ray Bradbury", disponivel: false });
biblioteca.adicionarLivro({ titulo: "O Conto da Aia", autor: "Margaret Atwood", disponivel: true });

const livrosDisponiveis = biblioteca.buscarLivrosDisponiveis();

console.log(livrosDisponiveis);