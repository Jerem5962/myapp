const express = require('express')
var router = express.Router()
var idUuid = require('uuid')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Order = require('./order')
const order = require('./order')
require('dotenv').config()
db = process.env.DB_MONGO

router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.json())

router.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-requested-With, Content, Accept, Content-Type, Authorization')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
  next()
})

mongoose.connect(db, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('connexion effectee')
  })
  .catch((err) => {
    console.log('connexion echouée error: ' + err)
  })

router.get('/', (req, res) => {
  console.log(
    '\n' + 'Date actuelle: ' + Date.now() + '\n',
    'URL: ' + req.baseUrl + '\n',
    'Méthod: ' + req.method
  )
  orders = Order.find(() => {
    if (orders) {
      console.log(orders)
    }
  })
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
  const order = Order.findById({_id: id})
  order.then((order) => {
    console.log(order)
    res.send('voici l\'order: ' + order)
  })
  .catch((err) => {
    res.send('order not found')
  })
  
})

router.post('/', (req, res) => {
  id = idUuid.v4()
  const order = new Order({
    description: "test",
    imageUrl: 'test.url',
    userId: id,
    price: Math.random()
  })
  order.save()
  .then(() => {
    res.send('Order avec description: ' + order.description + ' créé et id: ' + order.id)
    console.log(order.schema) 
  })
  .catch((err) => {
    console.log("Erreur survenue: " + err)
  })
  
})

router.put('/:id', (req, res) => {
  id = req.params.id
  Order.updateOne({_id: id}, {...req.body}, (err) => {
    if (err) {
      res.status(400).send('update non effectuee')
    }
    res.status(200).send("order update")
  })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  res.status(204).send('Order ' + id + ' supprimer')
})

module.exports = router