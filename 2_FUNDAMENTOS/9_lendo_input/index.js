const { read } = require('fs')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Qual a sua linguagem preferida? ', (language) => {
    if (language === 'Python') {
        console.log('Isso nem é linguagem!')
    }else{
        console.log(`A minha linguagem preferira é: ${language}`)
    }
    readline.close()
})