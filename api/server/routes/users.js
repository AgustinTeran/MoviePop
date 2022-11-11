var express = require("express")
var route = express.Router()
var {sequelize,users} = require("../../db")


route.get("/favorites/:userId",async(req,res) => {
    try {
        var {userId} = req.params
        var favorites = await sequelize.models.users.findByPk(userId,{
            include: "films"
        })
        if(favorites){
            favorites = favorites.films.map(e => {
                return {
                    id: e.id,
                    image: e.image,
                    name: e.name
                }
            })
        }
        res.send(favorites)
    } catch (error) {
        res.send(error.message)
    }
})


route.post("/", async(req,res) => {
    try{
        // req.body = {name: ... , email: ... , password: ...}
        await sequelize.models.users.create(req.body)
        res.send("OK")
    }catch(e){
        res.send(e.message)
    }
})

route.post("/auth", async(req,res) => {
    try{
        var {email,password} = req.body
        var user = await sequelize.models.users.findOne({
            where: {
                email, password
            }
        })
        user? res.send("OK") : res.send("")
    }catch(e){
        res.send(e.message)
    }
})
module.exports = route