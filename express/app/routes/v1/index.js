const express = require('express')

const router = express.Router()

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.json('ok'))

/**
  * GET /
  */
router.get('/', (req, res) => res.render('index', { title: 'Express, Webpack Boilerplate' }))


module.exports = router
