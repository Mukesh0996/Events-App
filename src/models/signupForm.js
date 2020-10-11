const eventDB = require("../config/DB");
const { DataTypes } = require("sequelize");

const signUp = eventDB.define("events", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: DataTypes.STRING,
    field: "first_name",
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    field: "last_name",
    allowNull: false
  },
  gender: {
    type: DataTypes.ENUM,
    values: ["Male", "Female"],
    allowNull: false
  },
  yearsOfExperience: {
    type: DataTypes.INTEGER,
    field: "years_of_experience",
    allowNull: false,
    validate: {
      isNumeric: true,
      min: 0,
      max: 40
    }
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contact: {
    type: DataTypes.STRING,
    allowNull: false
  },
  profession: {
    type: DataTypes.ENUM,
    values: ["IT", "Management", "Student"]
  }
});

module.exports = signUp;
