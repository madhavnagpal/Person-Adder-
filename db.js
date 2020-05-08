const Sequelize = require("sequelize");

const db = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "user1",
  password: "password1",
  database: "api1",
});

const Persons = db.define("Persons", {
  Person_Id: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Person_Name: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  Person_Age: {
    type: Sequelize.DataTypes.INTEGER,
    defaultValue: 18,
  },
});

async function getAllPersons() {
  return await Persons.findAll();
}
async function addPerson(name, age) {
  await Persons.create({ Person_Name: name, Person_Age: age });
}

module.exports = {
  getAllPersons,
  addPerson,
};
