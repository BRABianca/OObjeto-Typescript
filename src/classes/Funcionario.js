"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("./Pessoa"));
class Funcionario extends Pessoa_1.default {
    constructor(nome, idade, cpf, cargo, salario) {
        super(nome, idade, cpf);
        this.cargo = cargo;
        this.salario = salario;
    }
    apresentar() {
        return `Funcionario: ${this.nome}, Cargo: ${this.cargo}, Salário: R$ ${this.salario}`;
    }
}
exports.default = Funcionario;
