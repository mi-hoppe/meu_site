class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
    saudacao() {
        return `olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`
    }
}
const pessoa1 = new Pessoa("Pedro", 17)
console.log(pessoa1.saudacao())