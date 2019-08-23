const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

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
    res.send('hello world!')
})


app.listen(3000, () => {
    console.log('server is up on port 3000.')
})