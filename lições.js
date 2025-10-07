//     class Conta {
//       constructor(numero, titular, saldo) {
//         this.numero = numero;
//         this.titular = titular;
//         this.saldo = saldo;
//       }
//     }

//     class Banco {
//       #contas = [];
//       #contador = 1;

//       abrirConta(titular, saldoInicial) {
//         const conta = new Conta(this.#contador++, titular, saldoInicial);
//         this.#contas.push(conta);
//         return conta.numero;
//       }

//       consultarSaldo(numeroConta) {
//         const conta = this.#contas.find(c => c.numero === numeroConta);
//         return conta ? conta.saldo : null;
//       }

//       transferir(origem, destino, valor) {
//         const contaOrigem = this.#contas.find(c => c.numero === origem);
//         const contaDestino = this.#contas.find(c => c.numero === destino);
//         if (contaOrigem && contaDestino && contaOrigem.saldo >= valor) {
//           contaOrigem.saldo -= valor;
//           contaDestino.saldo += valor;
//           return true;
//         }
//         return false;
//       }
//     }

//     // 12. Classe Pedido 
//     class Pedido {
//       #itens = [];

//       adicionarItem(nome, valor) {
//         this.#itens.push({ nome, valor });
//       }

//       removerItem(nome) {
//         this.#itens = this.#itens.filter(item => item.nome !== nome);
//       }

//       calcularTotal() {
//         return this.#itens.reduce((total, item) => total + item.valor, 0);
//       }
//     }

//     // ---------- 13. Classe UsuarioSistema ----------
//     class UsuarioSistema {
//       #login;
//       #senha;

//       constructor(login, senha) {
//         this.#login = login;
//         this.#senha = senha;
//       }

//       autenticar(login, senha) {
//         return this.#login === login && this.#senha === senha;
//       }

//       alterarSenha(senhaAntiga, senhaNova) {
//         if (this.#senha === senhaAntiga) {
//           this.#senha = senhaNova;
//           return true;
//         }
//         return false;
//       }
//     }

//     // ---------- 14. Herança: Funcionários ----------
//     class Funcionario {
//       constructor(nome, salarioBase) {
//         this.nome = nome;
//         this.salarioBase = salarioBase;
//       }

//       calcularSalarioLiquido() {
//         return this.salarioBase;
//       }
//     }

//     class FuncionarioCLT extends Funcionario {
//       calcularSalarioLiquido() {
//         const imposto = this.salarioBase * 0.10;
//         const comissao = this.salarioBase * 0.05;
//         return this.salarioBase - imposto + comissao;
//       }
//     }

//     class FuncionarioPJ extends Funcionario {
//       calcularSalarioLiquido() {
//         return this.salarioBase; // Sem descontos
//       }
//     }

//     class Estagiario extends Funcionario {
//       calcularSalarioLiquido() {
//         const vt = this.salarioBase * 0.05;
//         return this.salarioBase - vt;
//       }
//     }

//     // ---------- 15. Classe Investimento ----------
//     class Investimento {
//       calcularRendimento(valor, meses) {
//         return valor;
//       }
//     }

//     class RendaFixa extends Investimento {
//       calcularRendimento(valor, meses) {
//         for (let i = 0; i < meses; i++) {
//           valor *= 1.007;
//         }
//         return valor;
//       }
//     }

//     class CDB extends Investimento {
//       calcularRendimento(valor, meses) {
//         let inicial = valor;
//         for (let i = 0; i < meses; i++) {
//           valor *= 1.01;
//         }
//         let lucro = valor - inicial;
//         return inicial + lucro * 0.85;
//       }
//     }

//     class Acao extends Investimento {
//       calcularRendimento(valor, meses) {
//         for (let i = 0; i < meses; i++) {
//           let variacao = (Math.random() * 15 - 5) / 100; // -5% a +10%
//           valor *= 1 + variacao;
//         }
//         return valor;
//       }
//     }

//     // ---------- 16. Polimorfismo: Impostos ----------
//     class Imposto {
//       calcular(valor) {
//         return 0;
//       }
//     }

//     class ICMS extends Imposto {
//       calcular(valor) {
//         return valor * 0.18;
//       }
//     }

//     class ISS extends Imposto {
//       calcular(valor) {
//         return valor * 0.05;
//       }
//     }

//     class IRPF extends Imposto {
//       calcular(valor) {
//         if (valor <= 2000) return 0;
//         if (valor <= 5000) return valor * 0.15;
//         return valor * 0.275;
//       }
//     }

//     function calcularImpostos(impostos, valorBase) {
//       return impostos.map(imposto => imposto.calcular(valorBase));
//     }

//     // ---------- 17. Polimorfismo: Aplicações Financeiras ----------
//     class AplicacaoFinanceira {
//       simular(valor, meses) {
//         return valor;
//       }
//     }

//     class Poupanca extends AplicacaoFinanceira {
//       simular(valor, meses) {
//         for (let i = 0; i < meses; i++) {
//           valor *= 1.006;
//         }
//         return valor;
//       }
//     }

//     class TesouroDireto extends AplicacaoFinanceira {
//       simular(valor, meses) {
//         const inicial = valor;
//         for (let i = 0; i < meses; i++) {
//           valor *= 1.008;
//         }
//         const lucro = valor - inicial;
//         return inicial + lucro * 0.9; // 10% de IR
//       }
//     }

//     class Criptomoeda extends AplicacaoFinanceira {
//       simular(valor, meses) {
//         for (let i = 0; i < meses; i++) {
//           let variacao = (Math.random() * 45 - 20) / 100; // -20% a +25%
//           valor *= 1 + variacao;
//         }
//         return valor;
//       }
//     }

//     // ----- Teste Rápido no Console -----
//     console.log("=== Teste Banco ===");
//     const banco = new Banco();
//     const conta1 = banco.abrirConta("João", 1000);
//     const conta2 = banco.abrirConta("Maria", 500);
//     banco.transferir(conta1, conta2, 200);
//     console.log("Saldo João:", banco.consultarSaldo(conta1));
//     console.log("Saldo Maria:", banco.consultarSaldo(conta2));

//     console.log("=== Teste Pedido ===");
//     const pedido = new Pedido();
//     pedido.adicionarItem("Mouse", 50);
//     pedido.adicionarItem("Teclado", 100);
//     console.log("Total:", pedido.calcularTotal());

//     console.log("=== Teste UsuarioSistema ===");
//     const user = new UsuarioSistema("admin", "1234");
//     console.log("Autentica:", user.autenticar("admin", "1234"));

//     console.log("=== Teste Funcionários ===");
//     const clt = new FuncionarioCLT("Carlos", 3000);
//     const pj = new FuncionarioPJ("Ana", 3000);
//     const est = new Estagiario("Rafa", 3000);
//     console.log("CLT:", clt.calcularSalarioLiquido());
//     console.log("PJ:", pj.calcularSalarioLiquido());

//13:
// class UsuarioSistema {
//     #login;
//     #senha;

//     constructor(login, senha) {
//         this.#login = login;
//         this.#senha = senha;
//     }
//     autenticar(loginAutenticar, senhaAutenticar) {
//         if (this.#login == loginAutenticar && this.#senha == senhaAutenticar) {
//             return 'Usuário autenticado!'
//         } else {
//             return 'Login ou senha inválido.'
//         }
//     }
//     alterarSenha(senhaAntiga, senhaNova) {
//         if (senhaAntiga == this.#senha) {
//             this.#senha = senhaNova
//             return 'Senha alterada'
//         } else {
//             return 'Senha incorreta'
//         }
//     }
// }
// const usuario1 = new UsuarioSistema('Milena', '1234')
// console.log(usuario1.autenticar('Milena', '1234'))

// console.log(usuario1.alterarSenha('1234', '1234'))
// console.log(usuario1.autenticar('Milena', '1234'))

// usuario1.alterarSenha('1234', '1234');
// console.log(usuario1.autenticar("Milena", '1234'))


//14
// class Funcionario {
//     constructor(nome, salarioBase){
//         this.nome = nome;
//         this.salarioBase = salarioBase
//     }
//        calcularSalarioLiquido(){
//         return this.salarioBase
//     }  

// }

// class FuncionarioCLT extends Funcionario{
//     caucularSalarioLiquido(){
//         return this.salarioBase *0.9 + this.salarioBase * 0.05
//     }
// }
// class FuncionarioPJ extends Funcionario{
//     calcularSalarioLiquido (){
//         return this.salarioBase
//     }
// }

// class Estagiario extends Funcionario {
//     calcularSalarioLiquido() {
//         return this.salarioBase * 0.95
//     }
// }

// const clt = new FuncionarioCLT ("Ana", 2000)
// const pj = new FuncionarioPJ ('Milena',10000)
// const est = new Estagiario('Nicoly', 2000)
// console.log(clt.calcularSalarioLiquido())
// console.log(pj.calcularSalarioLiquido())
// console.log(est.calcularSalarioLiquido())


// const Estoque = {
//     caixa: 50,
//     palete: 10,
//     empilhadeira: 2
// };

// function verificarEstoque(produto, quantidade) {
//     if (Estoque[produto] !== undefined && Estoque[produto] >= quantidade) {
//         return true;
//     }
//     return false;
// }