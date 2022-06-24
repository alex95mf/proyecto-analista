const mysql = require('mysql');

let db;

const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'bdtoken',
    user: 'root',
    password: ''
});

conexion.connect(function(err){
    if(err){
        throw err;
    }else{
        /*if(!db){
            db = conexion;
            console.log('DB NUEVA');
        }else{
            console.log('DB EN USO');
        }
        db = conexion;*/
        console.log('CONEXION EXITOSA CON DB-CONNECTION');
        /*conexion.query('SELECT * from clientes', function(err, results, fields){
            if(err) throw err;
            results.forEach(result => {
                console.log(result);
            });
        });*/
    }
});

module.exports = conexion;

/*module.exports = function Connection(){
    if(!db){
        db = conexion;
        console.log('LLEGO IF');
    }else{
        console.log('LLEGO ELSE');
    }
    console.log('LLEGO RETURN DB');
    return db;    
};*/

/*conexion.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log('CONEXION EXITOSA');
    }
});*/

/*conexion.query('SELECT * from clientes', function(err, results, fields){
    if(err) throw err;
    results.forEach(result => {
        console.log(result);
    });
});*/