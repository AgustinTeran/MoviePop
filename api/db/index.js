require('dotenv').config()
var {Sequelize} = require("sequelize")
// Tragigo las variables de entorno
var {PASSWORD,DB,USER_DB}  = process.env


var sequelize = new Sequelize(`postgres://${USER_DB}:${PASSWORD}@localhost:5432/${DB}`,{
    logging: false
})


// "Inicializo" los modelos
var users = require("./models/users")
users(sequelize)

var reviews = require("./models/reviews")
reviews(sequelize)

var films = require("./models/films")
films(sequelize)


// Relaciones

sequelize.models.users.belongsToMany(sequelize.models.reviews,{through:"usersReviews"})
sequelize.models.reviews.belongsToMany(sequelize.models.users,{through:"usersReviews"})

sequelize.models.users.belongsToMany(sequelize.models.films,{through: "favorites"})
sequelize.models.films.belongsToMany(sequelize.models.users,{through: "favorites"})


module.exports = {
    sequelize,
    ...sequelize.models
}