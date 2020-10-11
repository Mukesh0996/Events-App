const userData = require("../models/signupForm");
const Sequelize = require("sequelize");

const extractData = (res, data) => {
  const label = [];
  const valueCount = [];
  const key = data === "gen" ? "gender" : "profession";
  res.forEach((e) => {
    label.push(e[key]);
    valueCount.push(e["count"]);
  });
  return { label, valueCount };
};
//finding gender count
const findGenderCount = async (gen) => {
  const result = await userData.findAll({
    group: gen,
    attributes: [gen, [Sequelize.fn("COUNT", "id"), "count"]]
  });
  const res = JSON.parse(JSON.stringify(result));
  console.log(res);
  const { label, valueCount } = extractData(res, "gen");
  return { label, valueCount };
};

const professionCount = async (prof) => {
  const result = await userData.findAll({
    group: [prof],
    attributes: [prof, [Sequelize.fn("COUNT", "id"), "count"]]
  });
  const res = JSON.parse(JSON.stringify(result));
  const { label, valueCount } = extractData(res, "prof");
  console.log(valueCount);
  return { p_label: label, p_count: valueCount };
};

module.exports = { findGenderCount, professionCount };
