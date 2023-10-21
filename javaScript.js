// Sempre iniciar uma variável com "const" e se precisar depois a altere para "let"
const number = 10

// Para receber um número pelo alerta do html
/*
const variavel = Number(prompt("Insira um valor"))
alert(variavel + 10)
*/

/* 1. Crie uma variável JavaScript e coloque nela o valor de sua idade. Mostre no html usando o document.write() o dado contido na variável junto da frase "Minha idade é x anos", sendo "x" o valor armazenado na sua variável. */
document.write('Exercício 1<br/>')
const age = 40
document.write(`Minha idade é ${age} anos`)
document.write('<br/><br/>')

/* 2. Crie três variáveis JavaScript, em duas delas atribua os valores que você quiser e na outra atribua o valor da soma das duas primeiras variáveis. Apresente valor da soma no documento html junto da frase "A resultado da soma de x e y é z", sendo x o valor armazenado na primeira variável, y o valor armazenado segunda variável e z o valor armazenado na terceira variável */
document.write('Exercício 2<br/>')
const num1 = 10
const num2 = 20
const sum = num1 + num2
document.write(`A resultado da soma de ${num1} e ${num2} é ${sum}`)
document.write('<br/><br/>')

/* 3. Crie três variáveis, na primeira variável coloque o total de uma
compra, por exemplo 149.90. Na segunda variável coloque a
quantidade de parcelas, por exemplo 2. Na terceira variável coloque
o valor da parcela. Apresente no documento html as seguintes
informações: */
document.write('Exercício 3<br/>')

const total = 200.50
const instalments = 24
const valorParcela = total / instalments
document.write(`O valor total da compra foi R$${total.toString().replace('.',',')}<br/>`)
document.write(`Forma de pagamento: ${instalments}x de R$${valorParcela.toFixed(2).replace('.',',')}`)

document.write('<br/><br/>')


/* 4. Crie duas variáveis. Na primeira coloque um total de minutos e
defina um valor para ela (por exemplo, minutos = 120). Na segunda

coloque o total em segundos destes minutos armazenados na
primeira variável. Apresente no documento html a seguinte
informação: "_ minutos equivale à _ segundos!" */
document.write('Exercício 4<br/>')

const totalmin = 17
const totalsec = totalmin * 60
document.write(`${totalmin} minutos equivalem à ${totalsec} segundos`)
document.write('<br/><br/>')

/* 5. Crie cinco variáveis. Na primeira armazene o nome de um aluno. Na segunda, terceira e quarta coloque 3 notas (valores de 0 à 10). Calcule a média das notas e armazene na quinta variável criada. Apresente no documento html a seguinte informação: "O aluno _____ ficou com média _,_" */
document.write('Exercício 5<br/>')

const student = "Pablo"
const grade1 = 7.5
const grade2 = 8.2
const grade3 = 9.1
const average = ((grade1 + grade2 + grade3) / 3).toFixed(2).toString().replace('.',',')
document.write(`O aluno ${student} ficou com média ${average}`)
document.write('<br/><br/>')

/* 6. Desenvolva um algoritmo que armazene o valor 10 em uma variável A e o valor 20 em uma variável B. A seguir (utilizando apenas atribuições entre variáveis) troque os seus conteúdos fazendo com que o valor que está em A passe para B e vice-versa. Ao final, escrever os valores que ficaram armazenados nas variáveis. */
document.write('Exercício 6<br/>')

let a = 10;
let b = 20;

let c = a;

a = b;
b = c;

document.write(`A: ${a} B: ${b}`)
document.write('<br/><br/>')

/* 7. Desenvolva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. */
document.write('Exercício 7<br/>')

const eleitoresTotal = 150000
const votosBrancos = 5000
const votosNulos = 4000
const votosValidos = eleitoresTotal - (votosBrancos + votosNulos)

const percBrancos = ((votosBrancos/eleitoresTotal) * 100).toFixed(2)
const percNulos = ((votosNulos/eleitoresTotal) * 100).toFixed(2)
const percValidos = ((votosValidos/eleitoresTotal) * 100).toFixed(2)

document.write(`Total de eleitores<br/>`)
document.write(`Votos válidos: ${percValidos}%<br/>`)
document.write(`Votos brancos: ${percBrancos}%<br/>`)
document.write(`Votos válidos: ${percNulos}%`)

document.write('<br/><br/>')

/* 8. Desenvolva um algoritmo para ler dois valores e imprimir uma das três mensagens a seguir:
a. ‘Números iguais’, caso os números sejam iguais;
b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
c. ‘Segundo maior’, caso o segundo seja maior que o primeiro. */
document.write('Exercício 8<br/>')

const value1 = 6
const value2 = 7

if (value1 === value2) {
    document.write('Números iguais')
} else if (value1 > value2) {
    document.write(`Primeiro número é maior`)
} else {
    document.write(`Primeiro número é menor`)
}

document.write('<br/><br/>')

/* 9. As maçãs desta estação custam R$0,30 se forem compradas menos do que uma dúzia, e R$0,25 se forem compradas pelo menos doze. Desenvolva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra. */
document.write('Exercício 9<br/>')

const macasCompradas = 20

if (macasCompradas >= 12) {
    macaPreco = 0.25
} else {
    macaPreco = 0.30
}

let valorTotal = (macaPreco * macasCompradas).toFixed(2)

document.write(`Para ${macasCompradas} maçãs o valor total da compra é: R$${valorTotal.toString().replace('.',',')}`)
document.write('<br/><br/>')

/* 10. Escreva um algoritmo que tenha como valores de entradas o nome e idade do usuário e imprima no terminal o nome, a idade e o ano de nascimento do usuário. Ex: “Nome: Pedro, Idade: 22 anos, nasceu em 2000”.
OBS: Pegue o ano atual como base */
document.write('Exercício 10<br/>')
const name1 = "Pablo"
const age1 = 40

const yearBirth = 2023 - age1

document.write(`${name1}, Idade: ${age1}, nascido em ${yearBirth}`)
document.write('<br/><br/>')

/* 11. Crie um algoritmo que armazene um número inteiro positivo, e gere
um alerta com as seguintes mensagens:
a. “Número é par!”, se o valor armazenado for par;
b. “Número é impar!”, se o valor armazenado for ímpar; */
document.write('Exercício 11<br/>')

const number2 = 15

if (number2 % 2 === 0) {
    document.write(`O número ${number2} é PAR!`)
} else {
    document.write(`O número ${number2} é IMPAR!`)
}

document.write('<br/><br/>')

/* 12. Escreva um algoritmo que armazene o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem no console que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu). */
document.write('Exercício 12<br/>')

const actualYear = 2023
const birthYear = 2010
const age2 = actualYear - birthYear
const timeUntil16 = 16 - age2

if (age2 >= 16) {
    document.write(`Você pode votar este ano!`)
} else {
    document.write(`Você poderá votar em ${timeUntil16} ano(s)!`)
}