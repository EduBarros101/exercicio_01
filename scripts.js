let user = prompt('Olá, usuário! Como você gostaria de ser chamado?')

alert(
  `${user}, lhe serão solicitados dois números a seguir. A partir deles, serão efetuadas algumas operações matemáticas.`
)

let firstNumber, secondNumber

function getNumbers() {
  firstNumber = Number(prompt('Por favor, digite o primeiro número:'))

  while (isNaN(firstNumber)) {
    firstNumber = Number(
      prompt(`É necessário que a entrada seja um número.
      
      Por favor, digite o primeiro número:`)
    )
  }

  secondNumber = Number(prompt('Por favor, digite o segundo número:'))

  while (isNaN(secondNumber)) {
    secondNumber = Number(
      prompt(`É necessário que a entrada seja um número.
      
      Por favor, digite o segundo número:`)
    )
  }

  let equalityCheck = firstNumber == secondNumber ? true : false

  alert(
    equalityCheck
      ? 'Muito bem. Você escolheu dois números iguais.'
      : 'Certo. Você escolheu dois números diferentes.'
  )
}

function sum(firstNumberEntry, secondNumberEntry) {
  let total = firstNumberEntry + secondNumberEntry
  let evenOdd = total % 2 == 0 ? 'par' : 'ímpar'

  alert(
    `O resultado da soma dos dois números é ${total}, o que consiste em um número ${evenOdd}.`
  )
}

function substraction(firstNumberEntry, secondNumberEntry) {
  let total = firstNumberEntry - secondNumberEntry

  alert(
    `O resultado da subtração do primeiro número pelo segundo é de ${total}.`
  )
}

function multiplication(firstNumberEntry, secondNumberEntry) {
  let total = firstNumberEntry * secondNumberEntry

  alert(`O resultado da multiplicação entre os dois números é ${total}.`)
}

function division(firstNumberEntry, secondNumberEntry) {
  let total = firstNumberEntry / secondNumberEntry

  alert(
    `O resultado da divisão do Primeiro Número pelo Segundo Número é de ${total}.`
  )
}

function remainder(firstNumberEntry, secondNumberEntry) {
  let total = firstNumberEntry % secondNumberEntry

  alert(
    `O resto da divisão do Primeiro Número pelo Segundo Número é de ${total}.`
  )
}

getNumbers()

console.log(firstNumber, typeof firstNumber)
console.log(typeof Number())

console.log(secondNumber, typeof secondNumber)
console.log(typeof Number())

sum(firstNumber, secondNumber)
substraction(firstNumber, secondNumber)
multiplication(firstNumber, secondNumber)
division(firstNumber, secondNumber)
remainder(firstNumber, secondNumber)
