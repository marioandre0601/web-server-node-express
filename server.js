const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

let data = {
		nombre : 'mario',
};

app.use( express.static( __dirname + '/public' ));

// Express HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
	
	res.render('home',data);
});

app.get('/about', (req, res) => {
	res.render('about',data);
});
// app.get('/', function (req, res) {
//   // res.send('Hola Mundo');
//   let salida = {
// 		nombre : 'Mario',
// 		edad : 32,
// 		url : req.url
// 	}
// 	res.send(salida);
// })

// app.get('/data', function (req, res) {
// 	res.send('Hola data');
// })
 
app.listen(port,() => {
	console.log(`Escuchando peticiones en el puerto ${ port }`);
})