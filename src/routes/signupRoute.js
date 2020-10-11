const express = require("express");
const signUpModel = require("../models/signupForm");
const signUpRoute = express.Router();

signUpRoute.post("/", async (req, res) => {
  try {
    const result = await signUpModel.create(req.body);
    console.log("exec");
    res
      .status(200)
      .json({ message: "Sign Up Successfull", data: await result.get() });
  } catch (e) {
    console.log("-------------Error while adding values to DB");
    res.status(401).json({ message: "Sign Up Un-Successfull" });
    console.error(e);
    console.log("---------------------------------------------");
  }
});
module.exports = signUpRoute;
