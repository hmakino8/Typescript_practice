enum SIZEEnum {
  'Small',
  'Medium',
  'Large'
}

console.log(SIZEEnum.Large)

console.log(SIZEEnum[0])

console.log(SIZEEnum[5])
//この場合jsファイルにトランスパイルすると即時関数が実行されるため、enumの使用はあまり推奨されない。
