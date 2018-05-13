const express = require('express')
const app = express()
const path = require("path")

require('dotenv').config();

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`APP RUNNING ON PORT ${PORT}`)}
);