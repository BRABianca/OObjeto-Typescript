"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Conta_1 = __importDefault(require("./Conta"));
class ContaPoupanca extends Conta_1.default {
    calcularSaldo() {
        const totalCreditos = this.creditos.reduce((total, credito) => total + credito.valor, 0);
        const totalDebitos = this.debitos.reduce((total, debito) => total + debito.valor, 0);
        return totalCreditos - totalDebitos;
    }
}
exports.default = ContaPoupanca;
