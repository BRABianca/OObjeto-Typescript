import Pessoa from './Pessoa';

class Funcionario extends Pessoa {
  constructor(
    nome: string,
    idade: number,
    cpf: string,
    public cargo: 'Gerente' | 'Atendente',
    public salario: number
  ) {
    super(nome, idade, cpf);
  }

  apresentar(): string {
    return `Funcionario: ${this.nome}, Cargo: ${this.cargo}, Salário: R$ ${this.salario}`;
  }
}

export default Funcionario;
