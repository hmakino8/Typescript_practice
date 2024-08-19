type MemberType = {
  name: string,
  age: number
}

const menberT: MemberType = {
  name: 'aaa',
  age: 31
}

type MemberHobby = {
  hobby: string
}

type MemberProfile = MemberType & MemberHobby

const memberInfo: MemberProfile = {
  name: 'hmakino',
  age: 31,
  hobby: 'soccer'
}

console.log(memberInfo.hobby)
