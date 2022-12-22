var express = require("express")
var server = express()
var cors = require("cors")


server.use(express.json())
server.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))


var routes = require("./routes")
server.use("/",routes)


module.exports = server