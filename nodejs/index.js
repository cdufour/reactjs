const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const formidable = require('formidable');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const session = require('express-session');
const { isFileValid } = require('./security');
const { checkSession, connectionLog } = require('./middlewares');

const app = express();
const port = 3200;

// connection à mysql
conn = mysql.createConnection({
    host: 'localhost',
    database: 'reactjs',
    user: 'root',
    password: 'root',
    port: 8889
})

conn.connect((err) => {
    if (err) console.error(err);
    console.log('Connected to db');
})

// config moteur de rendu (jsx)
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


const students = [
    {id:1, name:"Chris"},
    {id:2, name:"Philippe"},
    {id:3, name:"Vincent"},
];

// ** Middlewares **
app.use((req, res, next) => {
    //console.log(req.headers);
    if (req.headers['user-agent']
        .toLowerCase()
        .indexOf('curl') != -1) {
        return res.send('Not allowed');
    }
    next(); // passage au middleware suivant
})

// Middleware servant les fichiers statiques
app.use(express.static(__dirname + '/public'));

// Middlewares body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Middleware pour la session
app.use(session({secret: 'toto'}))

// ** Routing **

// app.get(['/', /[a-z]{2,4}$/, '/toto'], (req, res) => {
//     res.send('ok');
// })

// route avec paramètre
app.get('/student/:id', (req, res) => {
    var student = students.filter(s => s.id == req.params.id);
    if (student.length > 0) {
        res.send(student[0]);
    } else {
        res.send('Not found...');
    }
})

// querystring
// example: http://localhost:3200/search?theme=animals&lang=fr
app.get('/search', (req, res) => {
    console.log(req.query); // { theme: 'animals', lang: 'fr' }
    res.send('');
})

app.get('/html', (req, res) => {
    var title = 'Page HTML';
    var list = '<ul>';
    students.forEach(s => {
        list += '<li>' + s.name + '</li>';
    })
    list += '</ul>';
    
    var body = `
        <html>
            <head><title>HTML</title><head>
            <body>
                <h1>${title}</h1>
                <img src="googlelogo.png" />
                <!-- students -->
                ${list}
            </body>
        </html>
    `;
    res.send(body);
})

// envoi de json
app.get('/json', (req, res) => {
    res.json(students);
})

// fichier statique
app.get('/logo', (req, res) => {
    res.sendFile(__dirname + '/public/googlelogo.png');
})

app.delete('/article', (req, res) => {
    res.send('article deleted');
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
})

app.post('/login', connectionLog, (req, res) => {
    const { email, password } = req.body;
    var q = "SELECT password FROM user WHERE email = ?";
    q = mysql.format(q, [email]);
    conn.query(q, (err, result) => {
        if (err || result.length === 0) return res.send('Login failed');

        // comparation des mots de passe
        bcrypt.compare(password, result[0].password, (err, same) => {
            if (!same) return res.send('Login failed');
            req.session.connected = true;
            res.send('Login OK');
        })
    })
})

app.post('/ajax', (req, res) => {
    console.log(req.body);
    res.json(req.body);
})

app.post('/upload', (req, res) => {
    // corps de la requête en multipart
    const form = formidable({multiples: true})
    
    // module formidable pour parser les fichiers binaires
    form.parse(req, (err, fields, files) => {
        if (err) return res.send('Cannot upload file');
        if (!isFileValid(files.picture)) return res.send('File not valid');
        var dest = __dirname + '/public/upload/' + files.picture.name;
        fs.rename(files.picture.path, dest, (err) => {
            if (err) return res.send('Cannot upload file');
            res.send('File uploaded');
        })
    })
    //res.send('...'); Problème de double réponse
})

app.get('/jsx', checkSession, (req, res) => {
    res.render('index', { name: 'Chris' });
})

app.post('/user', (req, res) => {
    const { email, password } = req.body;
    // vérifier les inputs !!!

    bcrypt.hash(password, 8, (err, hash) => {
        var q = "INSERT INTO user (email, password) VALUES (?, ?)";
        q = mysql.format(q, [email, hash]);
        conn.query(q, (err, result) => {
            if (err) return res.status(500).send('Cannot add user');
            res.status(200).send('User added');
        })
    })
})

app.get('/private', checkSession , (req, res) => {
    //if(!req.session.connected) return res.status(401).send('Not allowed');
    res.send('Access allowed');
})

// Ecoute du port
app.listen(port, () => {
    console.log(`Server running on  ${port}...`);
})