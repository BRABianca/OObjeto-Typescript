"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("./Pessoa"));
class Cliente extends Pessoa_1.default {
    constructor() {
        super(...arguments);
        this.enderecos = [];
    }
    adicionarEndereco(endereco) {
        this.enderecos.push(endereco);
    }
    listarEnderecos() {
        console.log('Endereços: ', this.enderecos);
    }
    apresentar() {
        return `Cliente: ${this.nome}, CPF: ${this.cpf}`;
    }
}
exports.default = Cliente;
