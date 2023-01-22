import http from 'http'

import app from './app.js' // the actual Express app

const server = http.createServer(app)

server.listen(3001, () => {
    console.log(`Server running on port ${3001}`)
})
