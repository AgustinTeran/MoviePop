var {DataTypes, Sequelize} = require("sequelize")


module.exports = (s) => {
    s.define("films",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        image: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        }

    },{
        timestamps: false
    })
}