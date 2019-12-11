//INSTANCIAMOS EXPRESS
const express =  require('express');

const app = express();

// INICIALIZAMOS EL PUERTO DEL SERVIDOR
app.set('port', process.env.PORT || 3000);

// RESPUESTAS JSON
app.use(express.json());

// URLS CONSUMIBLES DE LA API
app.use(require('./routes/web'));

// CORREMOS EL SERVIDOR EN EL PUERTO 3000 
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});