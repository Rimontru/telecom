 // INSTANCIAMOS MYSQL
 const MySql = require('mysql');

// CONECCION A LA BASE DE DATOS CON MYSQL
 const mysqlConnection = MySql.createConnection({
    host:'127.0.0.1',
    user: 'root',
    password: '1234',/*'*ServerPrueba2019*',*/
    database: 'examen2019'
});

// VALIDAMOS QUE TODO SALIÓ BIEN
mysqlConnection.connect(function(err){
    if (err) {
        console.log(err);
        return
    }else{
        console.log('The connection to database was successful!');
    }
});

module.exports = mysqlConnection;