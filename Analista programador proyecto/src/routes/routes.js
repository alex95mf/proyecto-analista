const express = require('express');
const mysql = require('mysql');
var { read, insert } = require('../model/tasks');
const connection = require('../lib/db-connection');
const router = express.Router();
var creadorToken = require('../scripts/crearToken');
var generarToken = require('../scripts/generarToken');
var ver = 0;

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/usarToken', (req, res) => {
    var token;
    console.log();
    const tokenauth = req.body;
    console.log(tokenauth);
    if(JSON.stringify(tokenauth) == JSON.stringify({
        "token":creadorToken.itoken.toString()
   })){
        res.json({Verficado: "Acceso concedido"});
    }else{
        res.status(403).json({error: "Acceso denegado"});
    }
});

router.post('/generarToken', (req, res) => {
    insert(connection,req.body, (result) =>{
        res.json(result);
    });
});

router.get('/generarToken', (req, res) => {    
    //generarToken.temporizador.conteoSegundos();
    creadorToken.creadorToken.crearToken();
    var token = creadorToken.creadorToken.obtenerToken();
    /*var token = generarToken.token;
    var listaTokens = generarToken.listaTokens;
    var segundos = generarToken.temporizador.segundos();
    var informacion = generarToken.informacion;
    var generar = generarToken.temporizador;*/

    console.log('Ruta inicio', generarToken, 'Ruta fin');
    //console.log(generarToken.token);
    //console.log(generarToken.listaTokens);
    //console.log(generarToken.temporizador.segundos());
    //res.send(generarToken.token.toString() + " " + generarToken.listaTokens + " " + generarToken.temporizador.segundos());
    res.render('token', {
        token: token
        //listaTokens: listaTokens,
        //segundos: segundos,
        //informacion: informacion,
        //generar: generar,
        //ver: ver
    });
});

router.get('/verToken', (req, res) => {
    res.render('vertoken');
    console.log('viendo token');
});

router.get('/bd', (req, res) => {
    console.log(connection);
    read(connection, (result) => {
        res.json(result);
    });
});

module.exports = router;