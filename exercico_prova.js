//EXERCÍCIO 1:

// class InstrumentoMusical {
//     tocar(){
//     console.log("Tocar um instrumento")
//     }
// }
// class Violao extends InstrumentoMusical{
//     tocar(){
//         console.log("Tocando violão")
//     }
// }
// class Piano extends InstrumentoMusical{
//     tocar(){
//         console.log("Tocando piano")
//     }
// }
// let v = new Violao
// v.tocar()
// let p = new Piano
// p.tocar()




//EXERCÍCIO 2:

// class Funcionario {
//     constructor(nome, salario) {
//         this.nome = nome
//         this.salario = salario
//     }
//     sla() {
//         return `O funcionário ${this.nome} recebe ${this.salario} reais.`
//     }
// }
// class Gerente extends Funcionario {
//     constructor(nome, salario, bonus) {
//         super(nome, salario)
//         this.bonus = bonus
//     }
//     sla() {
//         return `${super.sla()} O gerente ganha um bônus de: ${this.bonus} reais.`
//     }
// }
// let func = new Funcionario("Buiu", 1300)
// let ger = new Gerente("Buiu" ,1300, 600)

// console.log(func.sla())
// console.log(ger.sla())




//EXERCÍCIO 3:

// class Veiculo {
//     constructor(marca, ano) {
//         this.marca = marca
//         this.ano = ano
//     }
//     sla() {
//         return (`o veículo da marca ${this.marca} foi lançado no ano ${this.ano}.`)
//     }
// }
// class Carro extends Veiculo{
//     constructor(portas, marca, ano){
//         super (portas, marca, ano)
//     this.portas = portas
//     }
//     sla() {
//         return (`Um carro tem ${this.portas} portas.`)
//     }
// }
// class Moto extends Veiculo{
//     constructor(cilindradas, marca, ano){
//         super (cilindradas, marca, ano)
//         this.cilindradas = cilindradas
//     }
//     sla(){
//         return (`A moto mt-03 tem ${this.cilindradas} cilindradas.`)
//     }
// }
// let v = new Veiculo ("honda", 2001)
// let c = new Carro (4)
// let m = new Moto (321)
// console.log(v.sla())
// console.log(c.sla())
// console.log(m.sla())




//EXERCÍCIO 4:

// class Funcionario {
//     constructor(salarioB) {
//         this.salarioB = salarioB
//     }
//     calcularSalario() {
//         return this.salarioB
//     }
// }
// class Gerente extends Funcionario {
//     constructor(salarioB, bonus) {
//         super(salarioB)
//         this.bonus = bonus
//     }
//     calcularSalario() {
//         let salario = this.salarioB + (this.salarioB * 0.3) + this.bonus
//         return `O gerente recebe ${salario} reais`
//     }
// }

// class Desenvolvidor extends Funcionario {
//     constructor(salarioB, adicional) {
//         super(salarioB)
//         this.adicional = adicional
//     }
//     calcularSalario() {
//         let salario = this.salarioB + (this.adicional * 0.2)
//         return `O desenvolvidor recebe ${salario} reais`
//     }
// }

// let g = new Gerente(3000, 500)
// let d = new Desenvolvidor(2000, 400)

// console.log(g.calcularSalario())
// console.log(d.calcularSalario())




//EXERCÍCIO 5:

// class ContaBancaria {
//     constructor(titular, saldo = 0) {
//         this.titular = titular
//         this.saldo = saldo
//     }
//     depositar(valor) {
//         if (valor > 0) {
//             this.saldo += valor
//             console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`)
//         } else {
//             console.log("Valor inválido para depósito.")
//         }
//     }
//     sacar(valor) {
//         if (valor > 0 && this.saldo >= valor) {
//             this.saldo -= valor
//             console.log(`Saque de ${valor} reais realizado. Saldo atual: R$${this.saldo}`)
//         } else {
//             console.log("Saldo insuficiente ou valor inválido.")
//         }
//     }
// }
// class ContaCorrente extends ContaBancaria {
//     sacar(valor) {
//         const taxa = 2
//         const total = valor + taxa
//      if (valor > 0 && this.saldo >= total) {
//          this.saldo -= total
//         console.log(`Saque de ${valor} reais realizado com taxa de R$${taxa}. Saldo atual: R$${this.saldo}`)
//  } else {
//           console.log("Saldo insuficiente ou valor inválido.")
//        }
//     }
// }
// class ContaPoupanca extends ContaBancaria {
//     atualizarSaldo() {
//      const rendimento = this.saldo * 0.05
//       this.saldo += rendimento
//       console.log(`Rendimento de R$${rendimento.toFixed(2)} aplicado. Saldo atual: R$${this.saldo.toFixed(2)}`)
//     }
// }
// let cc = new ContaCorrente("Ana", 1000)
// cc.sacar(100)
// cc.depositar(500)

// let cp = new ContaPoupanca("Carlos", 2000)
// cp.atualizarSaldo()
// cp.sacar(300)




//EXERCÍCIO 6:

// class Produto {
//     #nome
//     #preco
//     constructor(nome, preco) {
//         this.#nome = nome
//         this.preco = preco
//     }
//     get nome() {
//         return this.#nome
//     }
//     set nome(novoNome) {
//         if (novoNome.trim() !== "") {
//             this.#nome = novoNome
//         } else {
//             console.log("O nome não pode ser vazio")
//         }
//     }
//     get preco() {
//         return this.#preco
//     }
//     set preco(novoPreco) {
//         if (novoPreco >= 0) {
//             this.#preco = novoPreco
//         } else {
//             console.log("Preço não pode ser negativo!")
//         }
//     }
// }
// let p = new Produto("Celular", 1500)
// console.log(p.nome)
// console.log(p.preco)

// p.preco = -200
// console.log(p.preco)

// p.nome = "Notebook"
// p.preco = 3500
// console.log(p.nome)
// console.log(p.preco)




//EXERCÍCIO 7:

// class Carro {
//     #velocidade
//     constructor(velocidade) {
//         this.#velocidade = velocidade
//     }
//     get getvelocidade() { return this.#velocidade }
//     set setvelocidade(value) {
//         return this.#velocidade = value
//     }
//     acelerar() {
//         return this.#velocidade + 10
//     }
//     frear() {
//         if (this.#velocidade > 0) {
//             return this.#velocidade - 10
//         }
//     }
// }
// let car = new Carro(120)
// console.log(car.frear())
// console.log(car.acelerar())




// EXERCICIO 8
// class conta {
//     #saldo

//     constructor(saldo = 0) {
//         this.#saldo = saldo
//     }
//     depositar(valor) {
//         if (valor > 0) {
//             this.#saldo += valor
//             console.log(`Depósito de R$ ${valor} realizado com sucesso.`)
//         } else {
//             console.log('Valor de depósito inválido.')
//         }
//     }
//     sacar(valor) {
//         if (valor > 0 && valor <= this.#saldo > valor) {
//             this.#saldo -= valor
//             console.log(`Saque de R$ ${valor} realizado com sucesso. `)
//         } else {
//             console.log('Saldo insuficiente ou valor de saque inválido.')

//         }
//     }
//     getSaldo() {
//         return this.#saldo
//     }
// }

// const minhaConta = new conta(100)
// minhaConta.depositar(50)
// minhaConta.depositar(-50)
// minhaConta.sacar(200)
// minhaConta.sacar(-50)
// minhaConta.sacar(50)
// console.log(`Saldo atual: R$ ${minhaConta.getSaldo()}`)




// EXERCICIO 9
// class Biblioteca {
//     #livros
//     constructor() {
//         this.#livros = []
//     }
//     adicionarLivro(livro) {
//         this.#livros.push(livro)
//         console.log(`Livro "${livro}" adicionado à biblioteca.`)
//     }
//     removerLivro(livro) {
//         const index = this.#livros.indexOf(livro)
//         if (index !== -1) {
//             this.#livros.splice(index, 1)
//             console.log(`Livro "${livro}" removido da biblioteca.`)
//         } else {
//             console.log(`Livro "${livro}" não encontrado na biblioteca.`)
//         }
//     }
//     listarLivros() {
//         console.log("Livros na biblioteca:")
//         this.#livros.forEach((livro, index) => {
//             console.log(`${index + 1}. ${livro}`)
//         })
//     }
// }
// const minhaBiblioteca = new Biblioteca()
// minhaBiblioteca.adicionarLivro("O Pequeno Príncipe")



// EXERCICIO 10
// class cofrinho {
//     #valor
//     constructor() {
//         this.#valor = []
//     }
//     depositarValor(valor) {
//         if (valor > 0) {
//             this.#valor.push(valor)
//             console.log(`Moeda de R$ ${valor} adicionada ao cofrinho.`)
//         } else {
//             console.log("Valor inválido para moeda.")
//         }
//     }
//     saldoTotal() {
//         return this.#valor.reduce((total, moeda) => total + moeda, 0)
//     }
//     calcularTotal() {
//         const total = this.saldoTotal()
//         console.log(`Saldo total no cofrinho: R$ ${total.toFixed(2)}`)
//     }
//     retirar() {
//         if (this.#valor.length > 0) {
//             const valor = this.#valor.pop()
//             console.log(`Valor de R$ ${valor} retirada do cofrinho.`)
//         } else {
//             console.log("Cofrinho vazio. Nenhuma moeda para retirar.")
//         }
//     }
// }
// const meuCofrinho = new cofrinho()
// meuCofrinho.depositarValor(70.50)
// meuCofrinho.depositarValor(1.00)
// meuCofrinho.calcularTotal()
// meuCofrinho.retirar(70.00)
// meuCofrinho.calcularTotal()




// EXERCICIO 11

class Banco {
    #contas
    constructor() {
        this.#contas = []
    }
    adicionarConta(conta) {
        this.#contas.push(conta)
        console.log(`Conta de ${conta.titular} adicionada ao banco.`)
    }
    removerConta(titular) {
        const index = this.#contas.findIndex(conta => conta.titular === titular)
        if (index !== -1) {
            this.#contas.splice(index, 1)
            console.log(`Conta de ${titular} removida do banco.`)
        }
        else {
            console.log(`Conta de ${titular} não encontrada no banco.`)
        }
    }
    listarContas() {
        console.log("Contas no banco:")
        this.#contas.forEach((conta, index) => {
            console.log(`${index + 1}. Titular: ${conta.titular}, Saldo: R$${conta.saldo.toFixed(2)}`)
        }
        )
    }
}
class ContaBancaria {
    constructor(titular, saldo = 0) {
        this.titular = titular
        this.saldo = saldo
    }
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor
            console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`)
        } else {
            console.log("Valor inválido para depósito.")
        }
    }
    sacar(valor) {
        if (valor > 0 && this.saldo >= valor) {
            this.saldo -= valor
            console.log(`Saque de ${valor} reais realizado. Saldo atual: R$${this.saldo}`)
        } else {
            console.log("Saldo insuficiente ou valor inválido.")
        }
    }
}
const banco = new Banco()
const conta1 = new ContaBancaria("Alice", 1000)
const conta2 = new ContaBancaria("Bob", 500)
banco.adicionarConta(conta1)
banco.adicionarConta(conta2)
banco.listarContas()
banco.removerConta("Alice")
banco.listarContas()
