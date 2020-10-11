const express = require("express");
const expressHbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const signUpRoute = require("./routes/signupRoute");
const { findGenderCount, professionCount } = require("./helpers/helFns");
const { experienceCount } = require("./helpers/experience");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

const hbs = expressHbs.create({
  extname: ".hbs",
  layoutsDir: path.join(__dirname, "./views/layouts"),
  partialsDir: path.join(__dirname, "./views/partials")
});
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "./views"));
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.status(200).render("signup", {
    layout: "hero.hbs",
    method: "post",
    action: "/api/signup",
    title: "Sign Up"
  });
});

app.get("/charts", async (req, res) => {
  try {
    const { label, valueCount } = await findGenderCount("gender");
    const { p_label, p_count } = await professionCount("profession");
    const exp = await experienceCount();
    res.status(200).render("charts", {
      layout: "hero.hbs",
      title: "Charts",
      gender: "Gender Chart",
      genderlabel: label,
      genderCount: valueCount,
      profession: "Profession Chart",
      professionLabel: p_label,
      professionCount: p_count,
      experience: exp
    });
  } catch (e) {
    console.log("-----------------------------Error-----------------");
    console.error(e);
    console.log("----------------------------------------------------");
  }
});

app.use("/api/signup", signUpRoute);

app.get("*", (request, response) => {
  response.redirect("/");
});

app.listen(8080, () => {
  console.log("Server is running");
});
