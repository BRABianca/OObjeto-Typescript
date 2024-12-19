import Cliente from '../classes/Cliente';
import ContaCorrente from '../classes/ContaCorrente';

const cliente1 = new Cliente('Bianca', 25, '022.284.331-44');
cliente1.adicionarEndereco('Rua Constantinopla, nº 107');
cliente1.adicionarEndereco('Rua Tokyo, nº 231');
cliente1.listarEnderecos();

const conta1 = new ContaCorrente('001');
conta1.depositar(1000);
conta1.definirLimite(200);

const conta2 = new ContaCorrente('002');
conta2.depositar(500);

conta1.transferir(300, conta2);

console.log('Saldo Conta 1:', conta1.calcularSaldo());
console.log('Saldo Conta 2:', conta2.calcularSaldo());
