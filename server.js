const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require("path")
const jobRoutes = require('./src/routes/jobs')
require('dotenv').config();

const PORT = process.env.PORT || 4000

app.use(`/api/v1`, jobRoutes)
app.use(bodyParser.json())

app.listen(PORT, () => {
    console.log(`APP RUNNING ON PORT ${PORT}`)}
);

module.exports = app;