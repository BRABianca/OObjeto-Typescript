abstract class Conta {
    protected saldo: number = 0;
    protected creditos: { valor: number; descricao?: string }[] = [];
    protected debitos: { valor: number; descricao?: string }[] = [];
  
    constructor(public numero: string) {}
  
    depositar(valor: number): void {
      this.creditos.push({ valor, descricao: 'Depósito' });
      this.saldo += valor;
    }
  
    sacar(valor: number): void {
      if (this.saldo >= valor) {
        this.debitos.push({ valor, descricao: 'Saque' });
        this.saldo -= valor;
      } else {
        console.log('Saldo insuficiente para saque.');
      }
    }
  
    abstract calcularSaldo(): number;
  }
  
  export default Conta;
  