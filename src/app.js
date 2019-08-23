const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.POST || 3000
// define paths for express condig
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath) // change the default view path
hbs.registerPartials(partialsPath)

// setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {

    })
})

app.get('/introduction', (req, res) => {
    res.render('introduction', {

    })
})

app.get('/learn', (req, res) => {
    res.render('learn', {

    })
})

app.listen(port, () => {
    console.log('server is up on port ' + port)
})