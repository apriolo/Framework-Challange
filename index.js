var decompor = require('./src/functions/decompor');
const readline = require('readline');
const express = require('express');
const { exit } = require('process');
const { get } = require('https');
const app = express();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um Numero inteiro para decompor e saber seus numeros primos:', (num) => {
    console.log(decompor(num));
});


app.get('/decompor/:numero', function (req, res) {
    let numero = req.params.numero;
    if (!Number.isInteger(numero)) {
        res.send('Decomponha um numero inteiro positivo!');
        exit;
    }
    res.send(req.params.numero);
});
app.listen(8081, function() {
});