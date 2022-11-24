require("pg")
var server = require("./src/server")
var {sequelize} = require("./src/db")


server.listen(3001,async() => {
    await sequelize.sync({force: false})
    console.log("server listening on port 3001");
})