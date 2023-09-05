// Você pode apresentar o resultado tanto no **console** quanto em um **alerta** no navegador.

// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World!")
// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let numberOne = Number(prompt("Insira um número:"));
let numberTwo = Number(prompt("Insira outro número:"));;

alert(`A soma entre ${numberOne} e ${numberTwo} é ${numberOne + numberTwo}` )
// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
    let isNumber = 10
    if (typeof isNumber == 'number') {
      alert("É um número")
    } else {
      alert("Não é um número")
    }
//     💡 Para saber o tipo de dado você pode usar o operador `typeof`
    alert( typeof(isNumber))
// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
let isString = "10"
    if (typeof isString == 'string') {
      alert("É uma string")
    } else {
      alert("Não é uma string")
    }
// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
    let isBoolean = true

    if (typeof isBoolean == "boolean") {
      alert("É booleano")
    } else {
      alert("Não é booleano")
    }
// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
let otherNumber = Number(prompt("Insira um número:"));
let randomNumber = Number(prompt("Insira outro número:"));;

alert(`A subtração entre ${otherNumber} e ${randomNumber} é ${otherNumber - randomNumber}` )
// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
let multiNumberOne = Number(prompt("Insira um número:"));
let multiNumberTwo = Number(prompt("Insira outro número:"));;

alert(`A multiplicação entre ${multiNumberOne} e ${multiNumberTwo} é ${multiNumberOne * multiNumberTwo}` )

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
let divNumberOne = Number(prompt("Insira um número:"));
let divNumberTwo = Number(prompt("Insira outro número:"));;

alert(`A divisão entre ${divNumberOne} e ${divNumberTwo} é ${divNumberOne / divNumberTwo}` )
// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
let numberPar = Number(prompt("Insira um número:"));

if (numberPar % 2 == 0) {
  alert(`${numberPar} é par!` )
} else {
  alert(`${numberPar} não é par!` )
}


// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

let numberImpar = Number(prompt("Insira um número:"));

if (numberImpar % 2 != 0){
  alert(`${numberImpar} é impar!` )
} else {
  alert(`${numberImpar} não é impar!` )
}