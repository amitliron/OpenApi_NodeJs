var express = require('express')
var router = express.Router()

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

app = express();


router.get('/', function (req, res) {  
  console.log('features famalies')  
  res.send('features famalies list')  
})


router.post('/', jsonParser, function (req, res) {  
    console.log('post new features famalies')          
    res.send('OK')    
  })
  

module.exports = router