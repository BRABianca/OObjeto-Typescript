"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    constructor(numero) {
        this.numero = numero;
        this.saldo = 0;
        this.creditos = [];
        this.debitos = [];
    }
    depositar(valor) {
        this.creditos.push({ valor, descricao: 'Depósito' });
        this.saldo += valor;
    }
    sacar(valor) {
        if (this.saldo >= valor) {
            this.debitos.push({ valor, descricao: 'Saque' });
            this.saldo -= valor;
        }
        else {
            console.log('Saldo insuficiente para saque.');
        }
    }
}
exports.default = Conta;
