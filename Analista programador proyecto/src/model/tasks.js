const mysql = require('mysql');

function read(connection, callback){
    connection.query('SELECT * from tokens', (err, result) => {
        if(err) throw err;
        callback(result);

        connection.query;
    });
};

function insert(connection, data, callback){
    let insertQuery = "INSERT into tokens (tokenGenerado, tokenUso) VALUES (?, ?)"// No importan las mayus o minusculas para las tablas mysql (nombre o Nombre, apellido o Apellido, etc)
    let query = mysql.format(insertQuery, [data.tokenGenerado, data.tokenUso]);
    connection.query(query, function(err, result){
        if(err) {throw err;}
        callback(result);

        connection.query;
    });
};

module.exports = {read, insert};