type GenObject<T, U> = {
  name: string,
  age: number
  memo: T,
  value: U
}

const soccerMember: GenObject<string, number> = {
  name: 'hmakino',
  age: 31,
  memo: 'forward',
  value: 2
}

console.log(soccerMember)
