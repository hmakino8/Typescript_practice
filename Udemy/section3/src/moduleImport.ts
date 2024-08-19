import User from './moduleExportD'
import {UserType, BlogType as Blog} from './moduleExport'

const user : UserType = {
  id: 1,
  name: 'hmakino'
}
console.log(user.name)

const user2: User = {
  id: 2,
  name: 'kane'
}

console.log(user2.id)

const blog: Blog = {
  id: 3,
  name: 'Qoo'
}

console.log(blog.name)
