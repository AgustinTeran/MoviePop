var {DataTypes} = require("sequelize")

module.exports = (s) => {
    s.define("users",{
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        password: {
            type: DataTypes.STRING
        }
    },{
        timestamps: false
    })
}