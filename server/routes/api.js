const express = require('express')
const router = express.Router()

import { slash } from '../controllers/api'


router.get('/', (req, res) => {
    console.log('you made it to / via the routes api.js')
    res.json('hello')
})

module.exports = router