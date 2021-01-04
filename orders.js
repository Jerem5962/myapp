const express = require('express')
var router = express.Router()
var id = require('uuid')

router.get('/', (req, res) => {
  console.log(
    '\n' + 'Date actuelle: ' + Date.now() + '\n',
    'URL: ' + req.baseUrl + '\n',
    'Méthod: ' + req.method
  )
  res.send('Voici la liste des orders')
})

router.get('/id', (req, res) => {
  res.send('coming-soon' + id.v4() )
})

module.exports = router