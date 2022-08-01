const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

// What does insomnia see here?
// console.log the response

// api/v1/ref
router.get('/:material', (req, res) => {
  request
    .get(`/${req.params.material}`)
    .then((result) => {
      res.json(result.body)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
