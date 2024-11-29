interface LivroBiblioteca {
    titulo: string;
autor: string;
genero: string;
disponivel: boolean;
}

class BibliotecaGestao {
livros: LivroBiblioteca[] = [];

adicionarLivro(livro: LivroBiblioteca): void {
        this.livros.push(livro);
    }

    filtrarPorGenero(genero: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.genero === genero);
    }

    buscarPorAutor(autor: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.autor === autor);
    }

    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        return this.livros
            .filter(livro => livro.disponivel)
            .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
}

const bibliotecaGestao = new BibliotecaGestao();

bibliotecaGestao.adicionarLivro({ titulo: "Percy Jackson e o Ladrão de Raios", autor: "Rick Riordan", genero: "Fantasia", disponivel: true });
bibliotecaGestao.adicionarLivro({ titulo: "A Esperança", autor: "Suzanne Collins", genero: "Distopia", disponivel: false });
bibliotecaGestao.adicionarLivro({ titulo: "O Filho de Netuno", autor: "Rick Riordan", genero: "Fantasia", disponivel: true });
bibliotecaGestao.adicionarLivro({ titulo: "Jogos Vorazes", autor: "Suzanne Collins", genero: "Distopia", disponivel: true });
bibliotecaGestao.adicionarLivro({ titulo: "O Herói Perdido", autor: "Rick Riordan", genero: "Fantasia", disponivel: true });

const livrosFantasia = bibliotecaGestao.filtrarPorGenero("Fantasia");
console.log("Livros de Fantasia:", livrosFantasia);

const livrosOrwell = bibliotecaGestao.buscarPorAutor("George Orwell");
console.log("Livros de George Orwell:", livrosOrwell);


const livrosDisponiveisOrdenados = bibliotecaGestao.obterLivrosDisponiveisOrdenados();
console.log("Livros Disponíveis Ordenados:", livrosDisponiveisOrdenados);