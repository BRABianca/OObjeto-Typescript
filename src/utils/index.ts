import Cliente from '../classes/Cliente';
import Funcionario from '../classes/Funcionario';
import ContaCorrente from '../classes/ContaCorrente';
import ContaPoupanca from '../classes/ContaPoupanca';

// ========== TESTES ==========

// Aplicação 1: Criar dois funcionários do banco
console.log('=== Aplicação 1: Funcionários ===');
const gerente = new Funcionario('Ana', 45, '330.192.790-46', 'Gerente', 8000);
const atendente = new Funcionario('Carlos', 30, '474.971.370-85', 'Atendente', 3000);

console.log(gerente.apresentar());
console.log(atendente.apresentar());

// Aplicação 2: Criar cliente e adicionar endereços
console.log('\n=== Aplicação 2: Cliente e Endereços ===');
const cliente1 = new Cliente('Bianca', 25, '022.284.331-44');
cliente1.adicionarEndereco('Rua Rodovia Raposo Tavares, nº 284');
cliente1.adicionarEndereco('Rua Constantinopla, nº 107');
cliente1.adicionarEndereco('Rua Praça da República, nº 3054');

cliente1.listarEnderecos();

// Aplicação 3: Cliente com ContaCorrente - depósitos, saque, saldo
console.log('\n=== Aplicação 3: Conta Corrente ===');
const contaCorrente1 = new ContaCorrente('001');
contaCorrente1.depositar(100);
contaCorrente1.depositar(100);
contaCorrente1.depositar(100);
contaCorrente1.sacar(50);

console.log('Saldo da Conta Corrente:', contaCorrente1.calcularSaldo());

// Aplicação 4: Transferência entre ContaCorrente e ContaPoupanca
console.log('\n=== Aplicação 4: Transferência ===');
const cliente2 = new Cliente('Maria', 25, '187.448.240-33');
const contaCorrente2 = new ContaCorrente('002');
contaCorrente2.depositar(1000);

const cliente3 = new Cliente('Pedro', 40, '282.576.500-72');
const contaPoupanca = new ContaPoupanca('003');
contaPoupanca.depositar(1000);

contaCorrente2.transferir(500, contaPoupanca);

console.log('Saldo Conta Corrente:', contaCorrente2.calcularSaldo());
console.log('Saldo Conta Poupança:', contaPoupanca.calcularSaldo());

// Aplicação 5: Teste de limite em ContaCorrente e tentativa de transferência com valor alto
console.log('\n=== Aplicação 5: Limite e Transferência ===');
const contaCorrente3 = new ContaCorrente('004');
contaCorrente3.depositar(300);
contaCorrente3.definirLimite(100);

const contaCorrente4 = new ContaCorrente('005');
contaCorrente4.depositar(100);

console.log('Tentando transferir 1000 reais...');
contaCorrente3.transferir(1000, contaCorrente4);
console.log('Saldo Conta Corrente 3:', contaCorrente3.calcularSaldo());
console.log('Saldo Conta Corrente 4:', contaCorrente4.calcularSaldo());
