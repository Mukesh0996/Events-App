const { Op, Sequelize } = require("sequelize");
const signUpData = require("../models/signupForm");

const experienceCount = async () => {
  const belowTwo = await signUpData.findAll({
    where: {
      yearsOfExperience: {
        [Op.lt]: 2
      }
    },
    attributes: [[Sequelize.fn("COUNT", "id"), "count"]]
  });

  const twoandsix = await signUpData.findAll({
    where: {
      yearsOfExperience: {
        [Op.between]: [2, 6]
      }
    },
    attributes: [[Sequelize.fn("COUNT", "firstName"), "count"]]
  });

  const greatSix = await signUpData.findAll({
    where: {
      yearsOfExperience: {
        [Op.gt]: [6]
      }
    },
    attributes: [[Sequelize.fn("COUNT", "firstName"), "count"]]
  });

  const one = JSON.parse(JSON.stringify(belowTwo));
  const two = JSON.parse(JSON.stringify(twoandsix));
  const three = JSON.parse(JSON.stringify(greatSix));

  const finalResult = [one[0].count, two[0].count, three[0].count];
  return finalResult;
};

module.exports = { experienceCount };
