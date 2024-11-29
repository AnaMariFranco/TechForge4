//Prof, eu tentei subir no git clone mas o pc da faculdade não estava deixando, fiquei horas tentando. 


class ContaBancaria {
    titular: string;
saldo: number;

constructor(titular: string) {
        this.titular = titular;
        this.saldo = 0;
    }

    depositar(valor: number): void {
        this.saldo += valor;
    }

    sacar(valor: number): void {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("saldo insuficiente");
        }
    }

    mostrarSaldo(): number {
        return this.saldo;
    }
}

class Livro {
    titulo: string;
    autor: string;
    paginas: number;
    lido: boolean;

    constructor(titulo: string, autor: string, paginas: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = false;
    }

    marcarComoLido(): void {
        this.lido = true;
    }
}

class Produto {
    nome: string;
    preco: number;
    quantidade: number;

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    valorTotalEmEstoque(): number {
        return this.preco * this.quantidade;
    }
}

class Temperatura {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    paraFahrenheit(): number {
        return (this.valor * 9/5) + 32;
    }

    paraKelvin(): number {
        return this.valor + 273.15;
    }
}

class Agenda {
    compromissos: string[];

    constructor() {
        this.compromissos = [];
    }

    adicionarCompromisso(compromisso: string): void {
        this.compromissos.push(compromisso);
    }

    listarCompromissos(): string[] {
        return this.compromissos;
    }
}
class ContaBancaria {
    titular: string;
saldo: number;

constructor(titular: string) {
        this.titular = titular;
        this.saldo = 0;
    }

    depositar(valor: number): void {
        this.saldo += valor;
    }

    sacar(valor: number): void {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("saldo insuficiente");
        }
    }

    mostrarSaldo(): number {
        return this.saldo;
    }
}

class Livro {
    titulo: string;
    autor: string;
    paginas: number;
    lido: boolean;

    constructor(titulo: string, autor: string, paginas: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = false;
    }

    marcarComoLido(): void {
        this.lido = true;
    }
}

class Produto {
    nome: string;
    preco: number;
    quantidade: number;

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    valorTotalEmEstoque(): number {
        return this.preco * this.quantidade;
    }
}

class Temperatura {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    paraFahrenheit(): number {
        return (this.valor * 9/5) + 32;
    }

    paraKelvin(): number {
        return this.valor + 273.15;
    }
}

class Agenda {
    compromissos: string[];

    constructor() {
        this.compromissos = [];
    }

    adicionarCompromisso(compromisso: string): void {
        this.compromissos.push(compromisso);
    }

    listarCompromissos(): string[] {
        return this.compromissos;
    }
}