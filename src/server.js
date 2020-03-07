import express from 'express'
const server = express()
const port = 9000

server.get('./index')

server.listen(port, () => console.log(`Example app listening on port ${port}!`))