const express = require('express')
const path = require('path')

// What does insomnia see here?
const binRoutes = require('./routes/bins')
const thingRoutes = require('./routes/things')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/bin', binRoutes)
server.use('/api/v1/ref', thingRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
