const Sequelize = require("sequelize");
const UserModel = require("./models/user");

const sql = new Sequelize("socket", "root", "1234", {
  host: "localhost",
  dialect: "mysql",
});

const User = UserModel(sql, Sequelize);

sql.sync().then(() => {
  console.log("Tablas creada. Base de datos en uso");
});

module.exports = {
  User,
};
