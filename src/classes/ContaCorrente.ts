import Conta from './Conta';

class ContaCorrente extends Conta {
  private limite: number = 0;

  definirLimite(valor: number): void {
    this.limite = valor;
  }

  calcularSaldo(): number {
    const totalCreditos = this.creditos.reduce((total, credito) => total + credito.valor, 0);
    const totalDebitos = this.debitos.reduce((total, debito) => total + debito.valor, 0);
    return totalCreditos - totalDebitos + this.limite;
  }

  transferir(valor: number, contaDestino: Conta): void {
    if (this.saldo + this.limite >= valor) {
      this.sacar(valor); // Subtrai da conta de origem
      contaDestino.depositar(valor); // Adiciona à conta de destino
      console.log(`Transferência de R$${valor} realizada com sucesso.`);
    } else {
      console.log('Saldo insuficiente para transferência.');
    }
  }
}

export default ContaCorrente;
