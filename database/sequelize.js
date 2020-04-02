const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    "postgres://postgres:amarsempre@localhost:5432/ml_agre"
);
sequelize
    .authenticate()
    .then(() => {})
    .catch(err => {
        console.error("Unable to connect to the database:", err);
    });
module.exports = sequelize;
