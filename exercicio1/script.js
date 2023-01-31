let nome = prompt("Qual o seu nome?")
let idade = prompt("Qual a idade?")

console.log(typeof(nome))
console.log(typeof(idade))

//o console imprimiu undefined, porque as variaveis não foram inicializados e estão com valores 
// f) o tipo das variaveis agora é string

console.log("olá, "+nome+" sua idade é:"+idade)

console.log("Agora é a parte 2")

const p1 = "você é alto?"
const p2 = "você gosta de maçã?"
const p3 = "você gosta da cor azul?"

let resp1 = prompt(p1)
let resp2 = prompt(p2)
let resp3 = prompt(p3)

console.log(p1+" "+resp1)
console.log(p2+" "+resp2)
console.log(p3+" "+resp3)
