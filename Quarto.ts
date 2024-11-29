class Animal {
    private energia: number = 0;

    comer(): void {
        this.energia += 10;
        console.log("Comendo, energia aumentada.");
    }

    statusEnergia(): void {
        console.log(`Nível de energia: ${this.energia}`);
    }
}

class Leao extends Animal {
    comer(): void {
        console.log("Caçando...");
        this.energia -= 5;
        super.comer();
    }
}

class Passaro extends Animal {
}

const leão = new Leao();
leão.comer();
leão.statusEnergia();

const passaro = new Passaro();
passaro.comer();
passaro.statusEnergia();