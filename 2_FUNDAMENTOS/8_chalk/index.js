import chalk from 'chalk';

const nota = 9

if(nota >= 7){
console.log(chalk.green('Parabens! Voce foi aprovado!'))
}else{
    console.log(chalk.bgRed.black('Voce precisa fazer a prova de recuperação'))
}