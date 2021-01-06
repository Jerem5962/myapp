const express = require('express')
var routerHome = require('./router')
var routerOrders = require('./orders')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-requested-With, Content, Accept, Content-Type, Authorization')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
  next()
})

app.use('/home', routerHome)
app.use('/orders', routerOrders)

app.get('/', (req, res) => {
  res.render('index')
})
app.get('*', (req, res) => {
  res.status(404).send('page 404')
})

app.listen(port, () => {
  console.log('port d\'écoute OK')
})
