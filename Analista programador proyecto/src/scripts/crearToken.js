var token = Math.floor(Math.random()*(999999-100000))+100000;
var tiempo = 60;
var itoken = Math.floor(Math.random()*(999999-100000))+100000;;
var itiempo;
var verify;
const mysql = require('mysql');

const connection = require('../lib/db-connection');
var { read, insert } = require('../model/tasks');

    let insertQuery = "INSERT into tokens (tokenGenerado, tokenUso) VALUES (?, ?)"// No importan las mayus o minusculas para las tablas mysql (nombre o Nombre, apellido o Apellido, etc)
    let query = mysql.format(insertQuery, [itoken, 1]);
    connection.query(query, function(err, result){
        connection.query;
    });

function CreadorToken(token, tiempo){
    this.crearToken = function(){
        setInterval( () => {
            this.token = token;
            this.tiempo = tiempo;
            setTimeout(() => {
                if(this.tiempo >= 0){
                    console.log("1 Segundo transcurrido")
                    console.log("Tiempo restante: ", this.tiempo)
                    console.log("Token actual: ", this.token)
                    tiempo = this.tiempo;
                    token = this.token
                    tiempo = tiempo - 1;
                    itoken = this.token;
                    itiempo = this.tiempo;
                    //console.log("Variable itoken: ", itoken)
                }else{
                    console.log("Reiniciado")
                    tiempo = 60;
                    token = Math.floor(Math.random()*(999999-100000))+100000;
                }
              }, 1);
        }, 1000);
    }
    this.obtenerToken = function(){
        this.itoken = itoken
        console.log("itoken de obtenerToken: ", this.itoken);
        return this.itoken;
    }
}

var creadorToken = new CreadorToken(token, tiempo);
module.exports = {creadorToken, itoken, itiempo};