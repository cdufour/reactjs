const http = require('http');

 // process.argv[2]; récupère l'argument de la ligne de commande
 // node scrap.js www.google.com
const domain = process.argv[2];
const url = 'http://' + domain;

http.get(url, (res) => {
    console.log('=== GET ' + url + '===');
    console.log(' => status code = ' + res.statusCode);

    var buf = ''; // buffer
    res.on('data', (chunk) => {
        buf += chunk; // morceau du stream ajouté au buffer
    })
    res.on('end', () => {
        console.log(
            ' => BODY begins with = ',
            buf.toString().substr(0, 40)
        );
        console.log("=== END ===");
    })
})

