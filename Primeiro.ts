class Veiculo {
    mover(): void {
        console.log("O veículo esta se movendo");
    }
}

class Carro extends Veiculo {
    mover(): void {
        console.log("O carro está dirigindo");
    }
}

class Bicicleta extends Veiculo {
    mover(): void {
        console.log("A bicicleta esta pedalando");
    }
}

const meuCarro = new Carro();
const minhaBicicleta = new Bicicleta();

meuCarro.mover();
minhaBicicleta.mover();