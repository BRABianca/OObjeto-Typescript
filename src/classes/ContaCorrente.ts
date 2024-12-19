import Conta from './Conta';

class ContaCorrente extends Conta {
  private limite: number = 0;

  definirLimite(valor: number): void {
    this.limite = valor;
  }

  calcularSaldo(): number {
    return this.saldo + this.limite;
  }

  sacar(valor: number): void {
    if (this.saldo + this.limite >= valor) {
      this.saldo -= valor;
    } else {
      console.log('Saldo insuficiente ou limite excedido');
    }
  }

  transferir(valor: number, contaDestino: ContaCorrente): void {
    if (this.saldo + this.limite >= valor) {
      this.saldo -= valor;
      contaDestino.depositar(valor);
    } else {
      console.log('Transferência não realizada.');
    }
  }
}

export default ContaCorrente;
