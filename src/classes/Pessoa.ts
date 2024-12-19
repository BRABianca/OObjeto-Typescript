import {validarCPF} from "../utils/validator";

abstract class Pessoa {
    constructor(
        public nome: string, 
        public idade: number,
        public _cpf: string,
    ) {
        if (!validarCPF(_cpf)){
            throw new Error('CPF inválido!');
        }
    }

    get cpf(): string {
        return this._cpf;
    }
    abstract apresentar(): string;
}

export default Pessoa;