// INSTANCIAMOS EXPRESS
const express = require('express');
const router = express.Router(); 

// IMPORTAMOS LA CONECCION  
const Conn = require('../database/config');

// CORS PARA PETICION HTTP
router.use( (request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// CREAMOS LA RUTAS DE CONECCION
router.post('/total-de-registros', (request, response) => {
  let sql = "SELECT count(*) AS total_regitros FROM registros";
  Conn.query(sql, (error, res, fields) => {
    if (!error)
      response.json(res);
    else
      response.json({error: error});
  });
});

router.post('/find/take/radiobases', (request, response) => {
  const inicia = request.body.inicia
  const mostrar = request.body.mostrar

  let sql = "SELECT * FROM registros WHERE fecha = '2019-08-23' LIMIT "+inicia+","+mostrar+" ";
  Conn.query(sql, (error, res, fields) => {
    if (!error)
      response.json(res);
    else
      response.json({error: error});
  });
});

module.exports = router;