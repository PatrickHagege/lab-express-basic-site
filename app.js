const express = require('express')

const app = express()
const hbs = require("hbs");

app.set('view engine', 'hbs')
app.use(express.static('public'))

hbs.registerPartials(__dirname + "/views/partials")

app.get('/', (req, res) =>{
    res.render('home',
    {
        homeview:true
    })
})

app.get('/about', (req, res) =>{
    res.render('about',
        {
            aboutView:true
        }
    )
})

app.get('/works', (req, res) =>{
    res.render('works', {
        works: [
            'images/horse.png',
            'images/hyeres.png',
            'images/newspaper.png',
            'images/rain.png',
            'images/shangai.png',
            'images/shrinagar.jpg',
            'images/venise.png'
        ],
        worksView:true
    })
})

app.listen(5555)