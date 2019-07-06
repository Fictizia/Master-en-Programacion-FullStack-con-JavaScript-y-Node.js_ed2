
const helmet = require('helmet');
const model = require('./public/js/model.js');
var express = require('express');
var path = require('path');
var app = express();
var PORT = 3000;

app.use(helmet());
app.use(express.static('public'));


app.get('/getAllFilms',function(req,res){
    model.getAllFilms()
    .then(response =>{
        res.send(response)
    })
    
});

app.get('/getFilm/:title',function(req,res,next){
    
    model.searchOmdbFilm(req.params.title)
    .then(response =>res.send(response))
    
});

app.get('/saveFilm/:title',function(req,res,next){
    
    model.searchOmdbFilm(req.params.title)
    .then(film => {
        
        model.loadFilm(film).then((films) => {
             
            res.send(films);
        })
    })
    
    
});

app.get('/deleteFilm/:filmKey',function(req,res,next){
    
    model.deleteFilm(req.params.filmKey)
    .then(response =>res.send(response))
    
});

app.listen(PORT, function() {
    console.log('server running on http://localhost:' + PORT);
   });
/*











*/