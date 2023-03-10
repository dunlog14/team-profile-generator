const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const team = [];

function promptManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter manager name:",
        name: "name",
      },
      {
        type: "input",
        message: "Enter manager ID:",
        name: "id",
      },
      {
        type: "input",
        message: "Enter manager email address:",
        name: "email",
      },
      {
        type: "input",
        message: "Enter manager office number:",
        name: "officeNumber",
      },
    ])
    .then((data) => {
      const manager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber
      );
      team.push(manager);
      promptTeamMember();
    });
}

function promptTeamMember() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Select team member type:",
        choices: ["Engineer", "Intern", "Done"],
        name: "type",
      },
    ])
    .then((data) => {
      switch (data.type) {
        case "Engineer":
          promptEngineer();
          break;
        case "Intern":
          promptIntern();
          break;
        default:
          generateTeam();
      }
    });
}

function promptEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter engineer name:",
        name: "name",
      },
      {
        type: "input",
        message: "Enter engineer ID:",
        name: "id",
      },
      {
        type: "input",
        message: "Enter engineer email address:",
        name: "email",
      },
      {
        type: "input",
        message: "Enter engineer Github username:",
        name: "github",
      },
    ])
    .then((data) => {
      const engineer = new Engineer(
        data.name,
        data.id,
        data.email,
        data.github
      );
      team.push(engineer);
      promptTeamMember();
    });
}

function promptIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter intern name:",
        name: "name",
      },
      {
        type: "input",
        message: "Enter intern ID:",
        name: "id",
      },
      {
        type: "input",
        message: "Enter intern email address:",
        name: "email",
      },
      {
        type: "input",
        message: "Enter intern school name:",
        name: "school",
      },
    ])
    .then((data) => {
      const intern = new Intern(data.name, data.id, data.email, data.school);
      team.push(intern);
      promptTeamMember();
    });
}

function generateTeam() {
  const html = generateHTML(team);
  fs.writeFile("team.html", html, (err) => {
    if (err) throw err;
    console.log("Team profile page generated successfully!");
  });
}

function generateHTML(team) {
  // TODO: generate HTML code for team profile page
}

promptManager();
