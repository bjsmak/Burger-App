const mysql = require('mysql');
var connection;
//Connection to mySQL
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'burger_db'
});
};

connection.connect(function(err){
    if (err) throw err;
    console.log('Connected as ID' + connection.threadId);
})

module.exports = connection;