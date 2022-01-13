const template = require("./template");
const fs = require("fs");
const inquirer = require("inquirer");

// Questions

const questions = [
  {
    type: "input",
    message: "What is the title of the project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please write a brief description of your project",
    name: "description",
  },
  {
    type: "input",
    message: "Please write your installation instructions",
    name: "install",
  },
  {
    type: "input",
    message: "What is the intent of this project",
    name: "usage",
  },
  {
    type: "list",
    message: "Please select a valid license",
    choices: ["License 1", "License 2", "License 3", "License 4"],
    name: "license",
  },
  {
    type: "input",
    message: "What are your contributions?",
    name: "contriubte",
  },
  {
    type: "input",
    message: "Please describe any tests you have completed",
    name: "test",
  },
  {
    type: "input",
    message: "Please type any questions you might have, if none, click ENTER.",
    name: "questions",
  },
  {
    type: "input",
    message: "Please enter your email address",
    name: "email",
  },
  {
    type: "input",
    message: "Please enter your github username",
    name: "github",
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
