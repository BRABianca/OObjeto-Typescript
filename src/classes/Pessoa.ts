abstract class Pessoa {
    constructor(
        public nome: string, 
        public idade: string,
        publiccpf: string,
    ) {}

    abstract validarCPF(): boolean;
    abstract apresentar(): string;
}

export default Pessoa;