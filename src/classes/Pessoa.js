"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = require("../utils/validator");
class Pessoa {
    constructor(nome, idade, _cpf) {
        this.nome = nome;
        this.idade = idade;
        this._cpf = _cpf;
        if (!(0, validator_1.validarCPF)(_cpf)) {
            throw new Error('CPF inválido!');
        }
    }
    get cpf() {
        return this._cpf;
    }
}
exports.default = Pessoa;
