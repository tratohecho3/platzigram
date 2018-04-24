var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));
app.get('/',(req,res) =>{
    res.render('index');
});
app.get('/signup',(req,res) =>{
    res.render('index');
});
app.get('/signin',(req,res) =>{
    res.render('index');
});
app.listen(3000,(err) => {
    if(err){console.log(err)}
    console.log('La app esta corriendo en el puerto 3000');
});