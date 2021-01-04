const express = require('express')
const app = express()
const port = 3000
var routerHome = require('./router')
var routerOrders = require('./orders')

// app.use(function time(req, res, next) {
//   console.log(Date.now())  
// })

app.use('/home', routerHome)
app.use('/orders', routerOrders)

app.get('/', (req, res) => {
  res.send('Nous sommes sur la page d\'accueil de Jérémy Lobry-D')
})
app.get('*', (req, res) => {
  res.send('page 404')
})

app.listen(port, () => {
  console.log('port d\'écoute OK')
})
