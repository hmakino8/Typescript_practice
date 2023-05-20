type User = {
  id: number,
  name: string,
  age: number,
  hobby: string
}

type UserNameAndAge = Pick<User, 'name' | 'age'>

type UserPartialType = Partial<User>
