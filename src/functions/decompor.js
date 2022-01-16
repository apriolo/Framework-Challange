const res = require('express/lib/response');
const primo = require('./primo');

require('./primo');

var decompor = function (nr) {
    let nrAux = nr;
    var partes = [];
    while (nr > 1) {
        for (var i = 2; i <= nr; i++) {
            if (nr % i) continue;
            partes.push(nr);
            nr = nr / i;
            break;
        }
    }
    partes.push(1);
    let result = "";
    result += 'Numero '+ nrAux + ' decomposto :';
    result += '\n' + partes;

    let primoResults = new Array();
    for (let x = 0; x <= partes.length; x++) {
        let num = partes[x];
        if (primo(num)) {
            primoResults.push(num);
        }
    }
    result += '\nDestes numeros os primos são: ';
    result += 'Primos: '+ primoResults;
    
    return result;
}

module.exports = decompor;