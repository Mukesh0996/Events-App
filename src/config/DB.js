const { Sequelize } = require("sequelize");

const eventDB = new Sequelize(process.env.DB_URL);

(async () => {
  try {
    await eventDB.authenticate();
    console.log("Connection Successful");
  } catch (e) {
    console.log("-------_Error while connecting to DB");
    console.error(e);
    console.log("-------------------------------------");
  }
})();

module.exports = eventDB;
