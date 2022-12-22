var express = require("express")
var route = express.Router()
var {sequelize,users} = require("../../db")
var bcrypt = require("bcrypt")
var jwt = require("jsonwebtoken")
var {SECRET} = process.env
var autenticacionToken = require("../middlewares/auth")


route.get("/",autenticacionToken,async(req,res) => {
    try {
        var {email} = req.user

        res.send(await sequelize.models.users.findByPk(email,{attributes: ["email","name"]}))
    } catch (error) {
        res.send(error.message)
    }
})


route.post("/", async(req,res) => {
    try{
        // req.body = {name: ... , email: ... , password: ...}
        var {name,email,password} = req.body

        var password = await bcrypt.hash(password,10)

        await sequelize.models.users.create({name,email,password})
        
        var token = jwt.sign({email},SECRET)
        res.send(token)
    }catch(e){
        res.send(e.message)
    }
})

route.post("/auth", async(req,res) => {
    try{
        var {email,password} = req.body
        var user = await sequelize.models.users.findOne({
            where: {
                email
            }
        })

        if(user){
            if(await bcrypt.compare(password,user.password)){
                var token = jwt.sign({email},SECRET)
                res.send(token)
            }else{
                res.send("")
            }
        }
    }catch(e){
        res.send(e.message)
    }
})
module.exports = route