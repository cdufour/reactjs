const fs = require('fs');
const mysql = require('mysql');

// connection à mysql
conn = mysql.createConnection({
    host: 'localhost',
    database: 'reactjs',
    user: 'root',
    password: 'root',
    port: 8889
})

conn.connect((err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log('Connected to db');
    //insertBatch();
})

function insertBatch() {
    fs.readFile(__dirname + '/users.txt', 'utf8', (err, data) => {
        var rows = data.split('\n');
        rows.forEach(r => {
            var cols = r.split(',');
            var q = 'INSERT INTO user (email, password) VALUES (?,?)';
            q = mysql.format(q, [cols[1], cols[2]]);
            conn.query(q, (err, result) => {
                if (err) return console.error(err);
                console.log('Insertion in DB OK')
            })
    
        })
    })
}

