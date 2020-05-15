const http = require('http');

const teams = ["Juve", "Strasbourg", "Madrid"]

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.write(JSON.stringify(teams));
    res.end();
}).listen(3500)

console.log('Server running on 3500');