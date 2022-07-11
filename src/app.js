const path =require ('path');
const fs =require('fs')
const express = require('express');
const app = express();

app.get('/', function (req, res) {  
    res.send('<h1>Hola, estas en la pagina principal</h1>')
})
app.get('/productos', function (req, res) {  
    res.sendFile(path.join(__dirname, 'views/productos.html'))
})
app.get('/productos/1', function (req, res) {  
    res.sendFile(path.join(__dirname, 'views/productos1.html'))
})
// ruta generica dinamica 

app.get('/productos/:id', function (req, res) {  

    const id = req.params.productosId;

    const filePath = path.join(__dirname, `views/productos${id}.html`);

    const ruta = fs.existsSync(filePath)
    ? filePath
    : path.join(__dirname, `views/error.html`)

    res.sendFile(ruta);
    
});



// (./) es la ruta principal
// app.put actualizar entidad entera 
// app.patch actualizar solo un dato especifico
// app.delete 

app.listen(3000)