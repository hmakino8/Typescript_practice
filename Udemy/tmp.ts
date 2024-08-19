function hello(...names: string[]) {
    let greet = 'こんにちは！'
    names.forEach(name => {
        greet = `${greet}、${name}さん`
    })
    return greet
}

console.log(hello('tom', 'risa')) //こんにちは！、tomさん、risaさん
