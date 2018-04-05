var express = require('express');
var app = express();

app.get('/',(req,res) => res.send('Hola Mundo'));
app.listen(3000,(err) => {
    if(err){console.log(err)}
    console.log('La app esta corriendo en el puerto 3000');
});