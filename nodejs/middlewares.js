const fs = require('fs');

function checkSession(req, res, next) {
    if (!req.session.connected) return res.status(401).send('Not allowed');
    next();
}

function connectionLog(req, res, next) {
    var options = {encoding: 'utf8', flag: 'a'};
    var data = `\nLogin: ${ new Date().getTime() } from ${req.ip} ${req.hostname} -- ${req.body.email} / ${req.body.password}`;
    fs.writeFile(__dirname + '/connections.log', data, options, (err) => {
        if (err) console.log(err);
    })
    next();
}

module.exports = { checkSession, connectionLog }