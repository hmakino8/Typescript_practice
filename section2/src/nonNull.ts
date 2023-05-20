//例１
type Member = { name: string}
const getMemberName = (string?: Member) => {
  console.log(string!.name)
}

getMemberName({ name: 'hmakino'})

//例２
let memberName!: string

const addName = (val: string) => {
  memberName = val
}

addName('hmakino')

console.log(memberName)
