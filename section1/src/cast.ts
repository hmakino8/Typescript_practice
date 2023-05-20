const number1: number = 123
const inputValue: string = '123'

const changedValue = Number(inputValue)

const sum1 = number1 + inputValue
//　123123
console.log(sum1)

const sum2 = number1 + changedValue
//　246
console.log(sum2)
