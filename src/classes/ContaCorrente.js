"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Conta_1 = __importDefault(require("./Conta"));
class ContaCorrente extends Conta_1.default {
    constructor() {
        super(...arguments);
        this.limite = 0;
    }
    definirLimite(valor) {
        this.limite = valor;
    }
    calcularSaldo() {
        const totalCreditos = this.creditos.reduce((total, credito) => total + credito.valor, 0);
        const totalDebitos = this.debitos.reduce((total, debito) => total + debito.valor, 0);
        return totalCreditos - totalDebitos + this.limite;
    }
    transferir(valor, contaDestino) {
        if (this.saldo + this.limite >= valor) {
            this.sacar(valor); // Subtrai da conta de origem
            contaDestino.depositar(valor); // Adiciona à conta de destino
            console.log(`Transferência de R$${valor} realizada com sucesso.`);
        }
        else {
            console.log('Saldo insuficiente para transferência.');
        }
    }
}
exports.default = ContaCorrente;
