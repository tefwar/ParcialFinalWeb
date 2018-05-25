express = require('express'),
engines = require('consolidate');

var app = express();

app.engine('hbs', engines.handlebars);

app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

// Conectarse a Base de Datos
    // Iniciar servidor
    app.listen(5000);
    console.log("Server Connect")

app.get('/', (req, res) => {
        res.render('index', {});
})

//Cambio de pagina
app.get('/Proyectos', (req, res) => {
    res.render('proyectos', {});
})

app.get('/Contacto', (req, res) => {
    res.render('contacto', {
    });
});

//Contador de visitas
var fs = require('fs');

//create a file named mynewfile3.txt:


app.post('/', (req, res) => {
    
    fs.writeFile('visitas.txt', "fuck!", function (err) {
        if (err) throw err;
        console.log('fucking!');
      });
    
    });
