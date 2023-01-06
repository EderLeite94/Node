import chalk from 'chalk';
import inquirer from 'inquirer';

inquirer.prompt([
    {
        name: 'p1',
        message: 'Qual seu nome?',
    },
    {
        name: 'p2',
        message: 'Qual a sua idade?',
    },
])
    .then((answers) => {
        if(!answers.p1 || !answers.p2){
            throw new Error('o nome e a idade são obrigatorios!')
        }
        const name = answers.p1;
        const age = answers.p2;
        console.log(chalk.bgGreen(`Seu nome é ${name} e sua idade é ${age}`))
    })
    .catch((err) => console.log(err))