function funcTest(str : string, int : number) : void {
  console.log(`string is ${str} number is ${int}`)
}

funcTest('aaa', 123)

const arrowFuncTest = (str : string, int : number) : void => {
  console.log(`string is ${str} number is ${int}`)
}

arrowFuncTest('bbb', 456)

// 引数　？
const funcTestQ = (str: string, int? : number) : void => {
  console.log(str, int)
}

funcTestQ('aaa', 123)
funcTestQ('aaa')

// デフォルトパラメータ
const funcTestD = (int?: number, str: string = 'aaa') : void => {
  console.log(str, int)
}

funcTestD(123)


//　可変長パラメータ
const eachNumber = (...items: number[]) : void => {
  for (const item of items) {
    console.log(item)
  }
}

eachNumber(1, 2, 3, 4)
