const Sequelize = require("sequelize");
const sequelize = require("../database/sequelize");

const Produtores = sequelize.define(
    "produtore",
    {
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {}
);

module.exports = Produtores;
