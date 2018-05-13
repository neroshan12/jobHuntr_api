const express = require('express');
const router = express.Router()

router.get('/jobs', async (req, res, next) => {
    try {
        res.send('Jobs page.')
        next();
    } catch (error) {
        console.log(error)
        res.status(400)
    }
})

module.exports = router;