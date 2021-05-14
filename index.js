const fs = require("fs");
const inquirer = require("inquirer");
const template = require("./template");
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "Enter the project title",
    },
    {
      type: "input",
      name: "description",
      message: "Enter a project description",
    },
    {
      type: "input",
      name: "fileName",
      message: "Enter a name for the project screenshot followed by .png",
    },
    {
      type: "input",
      name: "installation",
      message: "Enter what the user needs to install to run this app.",
    },
    {
      type: "input",
      name: "usage",
      message: "Explain how the app is used. Give instructions.",
    },
    {
      type: "list",
      name: "license",
      message: "Choose your project license:",
      choices: [
        "MIT",
        "Other",
        "GPLv2",
        "Apache",
        "GPLv3",
        "BSD 3-clause",
        "Unlicense",
        "BSD 2-clause",
        "LGPLv3",
        "AGPLv3",
      ],
    },
    {
      type: "input",
      name: "contributing",
      message: "List all contributors who worked on this project.",
    },
    {
      type: "input",
      name: "tests",
      message: "Explain what commands are needed to test this app.",
    },
    {
      type: "input",
      name: "userName",
      message: "Enter your GitHub username.",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your Email Address.",
    },
  ])
  .then((data) => {
    const {
      title,
      description,
      fileName,
      installation,
      usage,
      license,
      contributing,
      tests,
      userName,
      email,
    } = data;
    fs.writeFile(
      "README.md",
      template.getReadme(
        title,
        description,
        fileName,
        installation,
        usage,
        license,
        contributing,
        tests,
        userName,
        email
      ),
      (err) => (err ? console.log(err) : console.log("Success!"))
    );
  });
