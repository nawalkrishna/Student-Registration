const express = require("express");
const ejs = require("ejs");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const student = require("./model/student");

const app = express();
const PORT = 5000;

mongoose.connect("mongodb://localhost:27017/studentDB");

app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: true }));
app.get("/", async (req, res) => {
  const students = await student.find();

  res.render("index", { students });
});

app.post("/save", async (req, res) => {
  const { rollNo, name, degree, city } = req.body;

  const students = new student({ rollNo, name, degree, city });

  await students.save();

  res.redirect("/");
});
app.listen(PORT, () => {
  console.log(`server run on port ${PORT}`);
});
