abstract class Funcionario {
    constructor(private nome: string, private salario: number) {}

    abstract calcularBonus(): number;

    calcularSalarioComBonus(): number {
        return this.salario + this.calcularBonus();
    }
}

class Gerente extends Funcionario {
    calcularBonus(): number {
        return this.salario * 0.10;
    }
}

class Operario extends Funcionario {
    calcularBonus(): number {
        return this.salario * 0.05;
    }
}

function calcularSalariosComBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach(funcionario => {
        console.log(`Salário com bônus: ${funcionario.calcularSalarioComBonus()}`);
    });
}

const funcionarios: Funcionario[] = [
    new Gerente("Aline", 4000),
    new Operario("Diego", 150)
];

calcularSalariosComBonus(funcionarios);