
const port = 3000;
const swaggerUi = require('swagger-ui-express');


// use yaml
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

// use express
const express = require('express')
const app = express()


var project_page = require('./project')
var filter_page = require('./filters')

app.use('/project', project_page)
app.use('/filter', filter_page)

// run
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, () => console.log(`Listening at http://localhost:${port}`))