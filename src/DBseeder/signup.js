const signUp = require("../models/signupForm");

const signUpData = [
  {
    firstName: "Mukesh",
    lastName: "Keerthipati",
    yearsOfExperience: 5,
    city: "Chennai",
    gender: "Male",
    address:
      "NO 4B VIJAYA APARTMENTS NO 26 1ST, STREET BALAJI NAGAR ROYAPETTAH",
    profession: "IT",
    contact: "9962598908"
  },
  {
    firstName: "Test",
    lastName: "K",
    yearsOfExperience: 1,
    city: "Chennai",
    gender: "Female",
    address: "NO 4 VIJAYA APARTMENTS NO 26 1ST, STREET BALAJI NAGAR ROYAPETTAH",
    profession: "Management",
    contact: "9962697108"
  },
  {
    firstName: "Raju",
    lastName: "K",
    yearsOfExperience: 1,
    city: "Chennai",
    gender: "Male",
    address: "NO 4 VIJAYA APARTMENTS NO 26 1ST, STREET BALAJI NAGAR ROYAPETTAH",
    profession: "Student",
    contact: "9962161492"
  },
  {
    firstName: "Testing",
    lastName: "K",
    yearsOfExperience: 2,
    city: "Chennai",
    gender: "Female",
    address: "NO 4 VIJAYA APARTMENTS NO 26 1ST, STREET BALAJI NAGAR ROYAPETTAH",
    profession: "Management",
    contact: "9962162491"
  },
  {
    firstName: "Veena",
    lastName: "K",
    yearsOfExperience: 9,
    city: "Chennai",
    gender: "Female",
    address: "NO 4 VIJAYA APARTMENTS NO 26 1ST, STREET BALAJI NAGAR ROYAPETTAH",
    profession: "Management",
    contact: "8438987569"
  }
];

const DBseeder = async () => {
  try {
    await signUp.sync({ force: true });
    signUpData.forEach(async (elem) => {
      console.log("exec");
      try {
        const result = await signUp.create(elem);
        console.log(result.get());
      } catch (e) {
        console.log("------------------");
        console.error(e);
        console.log("------------------");
      }
    });
  } catch (e) {
    console.log("-------Error in Seeding------");
    console.error(e);
    console.log("-------------------------------");
  }
};

DBseeder();
