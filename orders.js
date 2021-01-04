const express = require('express')
var router = express.Router()
var idUuid = require('uuid')

router.get('/', (req, res) => {
  console.log(
    '\n' + 'Date actuelle: ' + Date.now() + '\n',
    'URL: ' + req.baseUrl + '\n',
    'Méthod: ' + req.method
  )
  res.send('Voici la liste des orders')
})

router.get('/id', (req, res) => {
  id = idUuid.v4()
  console.log(
    '\n' + 'Date actuelle: ' + Date.now() + '\n',
    'URL: ' + req.baseUrl + req.url+ '\n',
    'Méthod: ' + req.method + '\n',
    'id: ' + id
  )
  res.send('voici l\'order ID: ' + id)
})

module.exports = router