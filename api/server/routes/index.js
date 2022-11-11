var express = require("express")
var router = express.Router()


var users = require("./users")
router.use("/users",users)

var reviews = require("./reviews")
router.use("/reviews",reviews)

var favorites = require("./favorites")
router.use("/favorites",favorites)

module.exports = router