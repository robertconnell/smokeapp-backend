const express = require('express')
const router = express.Router()

const queries = require('../queries')

router.get('/', (req, resp, next) => {
    queries.listBreakLast('smoke_break')
        .then(data => {resp.json({data})})
        .catch(next)
});

router.post('/', (req, resp, next) => {
    queries
        .createBreak(req.body)
        .then(smoke_break => {
            resp.status(201).json({ data: smoke_break });
        })
        .catch(next);
});

module.exports = router