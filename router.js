const express = require('express')
const { log } = require('./functions/functions')
var router = express.Router()

router.get('/', (req, res) => {
  log.logger(req)
  res.send('jeremy') 
})

module.exports = router