var express = require("express")
var route = express.Router()
var {sequelize,films} = require("../../db")
var autenticacionToken = require("../middlewares/auth")


route.get("/", autenticacionToken ,async(req,res) => {
    try {
        // email en el token
        var {email} = req.user

        // email por query
        var {userId} = req.query


        // SI EL MAIL DEL TOKEN Y EL MAIL POR QUERY NO COINCIDEN TIRO ERROR
        if(email !== userId) return res.status(401).send("Acceso Denegado")


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


route.post("/", autenticacionToken ,async(req,res) => {
    try{
        // Traigo el mail del token
        var {email} = req.user

        var {filmId,image,name,userId} = req.body

        // SI EL MAIL DEL TOKEN Y EL MAIL POR QUERY NO COINCIDEN TIRO ERROR
        if(email !== userId) return res.status(401).send("Acceso Denegado")

        
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


route.delete("/",autenticacionToken,async(req,res) => {
    try {
        // Traigo el mail del token
        var {email} = req.user

        var {filmId,userId} = req.query

        // SI EL MAIL DEL TOKEN Y EL MAIL POR QUERY NO COINCIDEN TIRO ERROR
        if(email !== userId) return res.status(401).send("Acceso Denegado")
        
        var film = await sequelize.models.films.findByPk(filmId)
        await film.removeUser(userId)
        res.send("REMOVED")
    } catch (error) {
        res.send(error.message)
    }
})

module.exports = route