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

router.get('/:id', (req, res) => {
  //id = idUuid.v4()
  id = req.params.id
  console.log(
    '\n' + 'Date actuelle: ' + Date.now() + '\n',
    'URL: ' + req.baseUrl + req.url+ '\n',
    'Méthod: ' + req.method + '\n',
    'id: ' + id
  )
  res.send('voici l\'order ID: ' + id)
})

router.post('/', (req, res) => {
  id = idUuid.v4()
  res.status(201).send('Order avec l\'id: ' + id + ' créé')
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  res.status(200).send('Order ' + id + ' update')
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  res.status(204).send('Order ' + id + ' supprimer')
})

module.exports = router