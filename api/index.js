require("pg")
var server = require("./server")
var {sequelize} = require("./db")


server.listen(3001,() => {
    sequelize.sync({force: false})
    console.log("server listening on port 3001");
})