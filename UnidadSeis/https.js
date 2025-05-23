const http = require('node:http')
const { findAvailablePort } = require('./10.free-port.js')

console.log(process.env)
const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello World\n')
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`)
  })
})
