
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
var features_famalies_page = require('./features_famalies')

app.use('/project', project_page)
app.use('/filter', filter_page)
app.use('/feature_famaliy', features_famalies_page)

// run
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, () => console.log(`Listening at http://localhost:${port}`))