// externo
const minimist = require('minimist');

//iterno
const soma = require('./soma').soma

const args = minimist(process.argv.slice(2))

const a = parseInt(args['a'])
const b = parseInt(args['b'])

soma(a, b)