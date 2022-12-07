require('dotenv').config()
var {Sequelize} = require("sequelize")
// Tragigo las variables de entorno
var {PASSWORD,DB,USER_DB,HOST}  = process.env


var sequelize = new Sequelize({
    database: `${DB}`,
    dialect: "postgres",
    host: `${HOST || "localhost"}`,
    port: "5432",
    username: `${USER_DB}`,
    password: `${PASSWORD}`,
    logging: false,
    pool: {
      max: 3
    },
    // dialectOptions: {
    //   ssl: {
    //     require: true,
    //     rejectUnauthorized: false,
    //   },
    //   keepAlive: true,
    // },
    // ssl: true,
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