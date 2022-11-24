var {DataTypes} = require("sequelize")


module.exports = (s) => {
    s.define("reviews",{
        filmID: {
            type: DataTypes.INTEGER
        },
        comment: {
            type: DataTypes.TEXT
        },
        rating: {
            type: DataTypes.STRING,
            validate: {
                max: 5,
                min: 0
            }
        }
    },{
        timestamps: false
    })
}