const express = require('express')
const router = express.Router()

const queries = require('../queries')

router.get('/', (req, resp, next) => {
    queries.list('smoker')
        .then(data => {resp.json({data})})
        .catch(next)
})

module.exports = router