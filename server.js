
const express = require('express')
const path = require('path')
const app = express()

app.set('views', path.join(__dirname,'views'))
app.set('views engine', 'ejs')
app.use(express.static(path.join(__dirname,"public")))


app.get('/home', function(req, res){
    res.render('index.ejs')
})

app.get('/performer', function(req, res){
    res.render('performer.ejs')
})

app.get('/about', function(req, res){
    res.render('about.ejs')
})

app.get('/program', function(req, res){
    res.render('Program.ejs')
})

app.get('/venue', function(req, res){
    res.render('venue.ejs')
})

app.get('/elements', function(req, res){
    res.render('elements.ejs')
})

app.get('/blog', function(req, res){
    res.render('blog.ejs')
})

app.get('/single-blog', function(req, res){
    res.render('single-blog.ejs')
})

app.get('/contact', function(req, res){
    res.render('contact.ejs')
})

app.listen(3005, function () {
    console.log('Vous êtes sur le port 3005 !')
  })