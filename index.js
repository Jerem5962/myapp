const express = require('express')
var routerHome = require('./router')
var routerOrders = require('./orders')
const app = express()
const port = 3000

app.use('/home', routerHome)
app.use('/orders', routerOrders)

app.get('/', (req, res) => {
  res.send('Nous sommes sur la page d\'accueil de Jérémy Lobry-D')
})
app.get('*', (req, res) => {
  res.status(404).send('page 404')
})

app.listen(port, () => {
  console.log('port d\'écoute OK')
})
