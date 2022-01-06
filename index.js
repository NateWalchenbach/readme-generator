const template = require("./template");

const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    message: "What is your name?",
    name: "name",
  },
  {
    message: "What is your age?",
    name: "age",
  },
  {
    message: "What is your job title?",
    name: "job",
  },
];

inquirer
  .prompt(questions)
  .then((data) => {
    fs.writeFileSync(`Readme.md`, template.createTemplate(data));
  })
  .catch((err) => {
    console.log(err);
  });
