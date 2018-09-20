const express = require('express')
const router = express.Router()

const queries = require('../queries')

router.get('/', (req, resp, next) => {
    queries.listBreak('smoke_break')
        .then(data => {resp.json({data})})
        .catch(next)
})

module.exports = router