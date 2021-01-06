const express = require('express')
var router = express.Router()
var idUuid = require('uuid')
const mongoose = require('mongoose')
const Order = require('./order')
require('dotenv').config()
let ejs = require('ejs')
const log = require('./functions/functions')


mongoose.connect(process.env.DB_MONGO, 
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
  log.loggerDateUrl(req)
  orders = Order.find()
    .then(orders => res.status(200).render('orders/orders', {orders: orders}))
})

router.get('/create', (req, res) => {
  res.status(200).render('orders/form')
})

router.get('/:id', (req, res) => {
  id = req.params.id
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
  console.log(req)
  const order = new Order({
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    userId: id,
    price: req.body.price
  })
  order.save()
  .then(() => {
    res.redirect('/orders')
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