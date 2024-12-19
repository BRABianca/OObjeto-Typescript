abstract class Conta {
    protected saldo: number = 0;
  
    constructor(public numero: string) {}
  
    abstract calcularSaldo(): number;
    depositar(valor: number): void {
      this.saldo += valor;
    }
  }
  
  export default Conta;
  