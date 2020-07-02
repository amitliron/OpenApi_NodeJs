var express = require('express')
var router = express.Router()

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

app = express();


router.get('/', function (req, res) {  
  console.log('get filters list')  
  res.send('filters list')  
})


router.post('/', jsonParser, function (req, res) {  
    console.log('post new filters')      
    console.log('filters name: %s, value: %s', req.body.name, req.body.value)    
    res.send('OK')    
  })
  

module.exports = router