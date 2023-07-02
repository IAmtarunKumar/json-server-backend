const jsonServer = require("json-server")

require("dotenv").config()

const server = jsonServer.create();

const router = jsonServer.router("db.json")

const middleware = jsonServer.defaults();



const port = process.env.port || 8080

server.use(middleware)
server.use(router)

server.listen(process.env.port)