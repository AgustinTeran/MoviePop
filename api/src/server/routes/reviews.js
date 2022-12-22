var express = require("express")
var route = express.Router()
var {sequelize,reviews} = require("../../db")
var autenticacionToken = require("../middlewares/auth")


route.get("/",async(req,res) => {
    try {
        var {filmID} = req.query
        var reviews = await sequelize.models.reviews.findAll({
            where: {
                filmID
            },
            include: {
                model: sequelize.models.users
            }
        })
       
        reviews = reviews.map(e => {
            return ({
                comment: e.comment,
                rating: e.rating,
                user: e.users[0].name
            })
        })

        res.send(reviews)
    } catch (error) {
        res.send(error.message)
    }
})

route.post("/", autenticacionToken, async(req,res) => {
    try{
        // email en el token
        var {email} = req.user

        var {filmID,userId,comment,rating} = req.body

         // SI EL MAIL DEL TOKEN Y EL MAIL POR QUERY NO COINCIDEN TIRO ERROR
         if(email !== userId) return res.status(401).send("Acceso Denegado")

        var existe = await sequelize.models.reviews.findOne({
            where: {
                filmID
            },
            include: {model:sequelize.models.users,where:{email: userId}}
        })

        if(existe){
            await existe.update({rating,comment})
            return res.send("Review was updated")
        }

        var review = await sequelize.models.reviews.create({
            filmID,comment,rating
        })
        await review.setUsers(userId)
        res.send("OK")
    }catch(e){
        res.send(e.message)
    }
})

module.exports = route