import Pessoa from './Pessoa';

class Cliente extends Pessoa {
  private enderecos: string[] = [];

  adicionarEndereco(endereco: string): void {
    this.enderecos.push(endereco);
  }

  listarEnderecos(): void {
    console.log('Endereços: ', this.enderecos);
  }

  apresentar(): string {
    return `Cliente: ${this.nome}, CPF: ${this.cpf}`;
  }
}

export default Cliente;