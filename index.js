// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the Name of your application?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description of your application?",
    name: "description",
  },
  {
    type: "input",
    message: "How do I install your application?",
    name: "installation",
  },
  {
    type: "input",
    message: "What is the usage of your application? How do I use it?",
    name: "usage",
  },
  {
    type: "input",
    message: "Who contributed to making this application?",
    name: "contributed",
  },
  {
    type: "list",
    message: "What license are you using for this application?",
    choices: ["MIT", "GPL", "Apache_2.0", "BSD"],
    name: "license",
  },
  {
    type: "input",
    message: "How do you test your application?",
    name: "test",
  },
  {
    type: "input",
    message: "What is your Github Username?",
    name: "gitUserName",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log("title:", answers.title);
    writeToFile("README.md", generateMarkdown(answers));
    console.log(generateMarkdown(answers)); // actually create a file using fs from what generateMarkdown returns;
  });
}

// Function call to initialize app
init();
