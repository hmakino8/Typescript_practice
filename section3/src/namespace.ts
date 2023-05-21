namespace First {
  export function testFunc(){ console.log('First')}
}

namespace Second {
  export function testFunc(){ console.log('Second')}
}

First.testFunc()
Second.testFunc()
