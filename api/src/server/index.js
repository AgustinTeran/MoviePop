var express = require("express")
var server = express()
var cors = require("cors")


server.use(express.json())
server.use(cors({
    origin: "https://moviepop-three.vercel.app"
}))


var routes = require("./routes")
server.use("/",routes)


module.exports = server