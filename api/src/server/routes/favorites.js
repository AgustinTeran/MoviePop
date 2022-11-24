var express = require("express")
var route = express.Router()
var {sequelize,films} = require("../../db")

route.get("/", async(req,res) => {
    try {
        var {userId} = req.query
        var favorites = await sequelize.models.films.findAll({
            include: {
                model: sequelize.models.users,
                attributes: [],
                where: {
                    email: userId
                }
            }
        })
        favorites.length? res.send(favorites) : res.send([])
    } catch (error) {
        res.send(error.message)
    }
})


route.post("/", async(req,res) => {
    try{
        var {filmId,image,name,userId} = req.body
        var [film,created] = await sequelize.models.films.findOrCreate({
            where: {
                id: filmId
            },
            defaults: {
                name,image
            }
        })
        await film.addUsers(userId)
        res.send("OK")
        
    }catch(e){
        res.send(e.message)
    }
})


route.delete("/",async(req,res) => {
    try {
        var {filmId,userId} = req.query
        
        var film = await sequelize.models.films.findByPk(filmId)
        await film.removeUser(userId)
        res.send("REMOVED")
    } catch (error) {
        res.send(error.message)
    }
})

module.exports = route