const express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
  console.log(
      '\n' + 'Date actuelle: ' + Date.now() + '\n',
      'URL: ' + req.baseUrl + '\n',
      'Méthod: ' + req.method
      )
  res.send('jeremy') 
})

module.exports = router