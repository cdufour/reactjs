const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let teams = ["Juve", "Strasbourg", "Madrid"]

// Server node natif
// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
    
//     if (req.url == "/teams") {
//         res.write(JSON.stringify(teams));
//     } else {
//         res.write('FORBIDDEN')
//     }
//     res.end();
// }).listen(3500)
// console.log('Server running on 3500');

// Middleware
app.use((req, res, next) => {
    //res.setHeader('X-Token', '1234');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
})

app.use(bodyParser.json())

// routes
app.get('/', (req, res) => {
    res.send('Racine')
})

app.get('/teams', (req, res) => {
    res.json(teams);
})

app.post('/teams', (req, res) => {
    const {name} = req.body.team;
    teams.push(name);
    res.send({message: "ok"});
})

app.listen(3500, () => {
    console.log('Server running on 3500');
})