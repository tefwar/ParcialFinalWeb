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

    //Contador de visitas
var contador = 0;
var contador2 = 0;
var contador3 = 0;
var fs = require('fs');
var contents = fs.readFileSync('visitas.txt').toString();
//console.log(contents);

app.get('/', (req, res) => {
        res.render('index', {});
        
        var contadorFinal = parseInt(contador++);
        console.log(contador);
        fs.writeFileSync('visitas.txt', "Inicio: "+contadorFinal+" Proyectos: "+contador2+" Contacto: "+contador3, function (err) {
            if (err) throw err;
            //console.log('fucking!');
          });
})



//Cambio de pagina
app.get('/Proyectos', (req, res) => {
    res.render('proyectos', {});

    var contadorFinal = parseInt(contador2++);
    console.log(contador2);
    fs.writeFileSync('visitas.txt', "Inicio: "+contador+" Proyectos: "+contadorFinal+" Contacto: "+contador3, function (err) {
        if (err) throw err;
        //console.log('fucking!');
      });
})

app.get('/Contacto', (req, res) => {
    res.render('contacto', {});

    var contadorFinal = parseInt(contador3++);
    console.log(contador3);
    fs.writeFileSync('visitas.txt', "Inicio: "+contador+" Proyectos: "+contador2+" Contacto: "+contadorFinal, function (err) {
        if (err) throw err;
        //console.log('fucking!');
      });
});


