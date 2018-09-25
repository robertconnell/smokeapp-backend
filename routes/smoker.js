const express = require('express')
const router = express.Router()

const queries = require('../queries')

router.get('/', (req, resp, next) => {
    queries.list('smoker')
        .then(data => {resp.json({data})})
        .catch(next)
})

router.post('/', (req, resp, next) => {
    queries
        .create(req.body)
        .then(smoker => {
            resp.status(201).json({ data: smoker });
        })
        .catch(next);
});

module.exports = router