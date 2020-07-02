var express = require('express')
var router = express.Router()

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

app = express();


// middleware that is specific to this router
//router.use(function timeLog (req, res, next) {
//  console.log('Time: ', Date.now())
//  next()
//})


router.get('/', function (req, res) {  
  console.log('get projects list')  
  res.send('Projects list')  
})


router.post('/', jsonParser, function (req, res) {  
    console.log('post new project')      
    console.log('project name: %s, user id: %s', req.body.name, req.body.user_id)    
    res.send('OK')    
  })
  

module.exports = router