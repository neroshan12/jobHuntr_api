const express = require('express');
const router = express.Router()
const queries = require('../../db/queries')

router.get('/jobs', async (req, res, next) => {
    try {
        const jobs = await queries.getAll('jobs')
        res.status(200)
        res.json({ jobs})
        next();
    } catch (error) {
        console.log(error)
        res.status(400)
    }
})

module.exports = router;