const express = require('express')
const db = require('../db/db.js')

const router = express.Router()

router.use(express.json())

// What does insomnia see here?
// api/v1/bin

router.get('/all', (req, res) => {
  db.getBins()
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  // Retrieve data from user input on front-end
  const newBin = {
    // materials_id: [req.body.materials],
    rules: req.body.rules,
    notes: req.body.notes,
    // collectionday: '',
    location: req.body.location,
    image: req.body.image,
  }
  // Parse data into JSON object
  // Post render of new bin - from id incremented in db write?
  db.newBin(newBin)
    .then((ids) => {
      return db.getBin(ids[0])
    })
    .then((bin) => {
      res.json(bin)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getBin(id)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
