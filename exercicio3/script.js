const nome = prompt("Qual o seu nome?")
const dataN = prompt("Digite sua data de nascimento")
let endereco = prompt("Qual o seu endereco?")
const cpf = Number(prompt("Digite seu cpf?"))
let escolaridade = prompt("Digite qual a sua escolaridade")
let temCnh = prompt("Você tem cnh?")
let filhos = Number(prompt("Quantos filhos você tem?"))
let cargo = prompt("Qual o seu cargo atual?")
let salario = Number(prompt("Informe seu salario"))
let comissao = Number(prompt("Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero"))
let anoDem = Number(prompt("qual o ano da demissão"))

console.log("tipo da variavel nome: "+ typeof(nome))
console.log("tipo da variavel data: "+ typeof(dataN))
console.log("tipo da variavel endereco: "+ typeof(endereco))
console.log("tipo da variavel cpf: "+ typeof(cpf))
console.log("tipo da variavel escolaridade: "+ typeof(escolaridade))
console.log("tipo da variavel cnh: "+ typeof(temCnh))
console.log("tipo da variavel filhos: "+ typeof(filhos))
console.log("tipo da variavel cargo: "+ typeof(cargo))
console.log("tipo da variavel salario: "+typeof(salario))
console.log("tipo da variavel comissao: "+ typeof(comissao))
console.log("tipo da variavel ano demissão: "+ typeof(anoDem))


console.log("Relário do Colaborador")
console.log("Nome: "+ nome)
console.log("Data de Nascimento: "+ dataN)
console.log("Endereco: "+ endereco)
console.log("CPF: "+ cpf)
console.log("Escolaridade: "+ escolaridade)
console.log("Tem CNH: "+ temCnh)
console.log("Quantidade de Filhos: "+ filhos)
console.log("Cargo: "+ cargo)
console.log("Salario: "+ salario)
console.log("Comissão: "+ comissao)
console.log("Ano da demissão: "+ anoDem)