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
  let html = "<!DOCTYPE html>\n";
  html += "<html>\n";
  html += "<head>\n";
  html += "<meta charset='UTF-8'>\n";
  html += "<meta name='viewport' content='width=device-width, initial-scale=1.0'>\n";
  html += "<meta http-equiv='X-UA-Compatible' content='ie=edge'>\n";
  html += "<title>Team Profile Page</title>\n";
  html += "</head>\n";
  html += "<body>\n";
  html += "<h1>Team Profile Page</h1>\n";

  // Iterate through each team member and generate a card for them
  for (let i = 0; i < team.length; i++) {
    html += "<div>\n";
    html += "<h2>" + team[i].getName() + "</h2>\n";
    html += "<h3>" + team[i].getRole() + "</h3>\n";
    html += "<p>Employee ID: " + team[i].getId() + "</p>\n";
    html += "<p>Email: <a href='mailto:" + team[i].getEmail() + "'>" + team[i].getEmail() + "</a></p>\n";

    // Add specific details for each team member type
    if (team[i] instanceof Manager) {
      html += "<p>Office Number: " + team[i].getOfficeNumber() + "</p>\n";
    } else if (team[i] instanceof Engineer) {
      html += "<p>Github: <a href='https://github.com/" + team[i].getGithub() + "'>" + team[i].getGithub() + "</a></p>\n";
    } else if (team[i] instanceof Intern) {
      html += "<p>School: " + team[i].getSchool() + "</p>\n";
    }

    html += "</div>\n";
  }

  html += "</body>\n";
  html += "</html>";
  return html;
}

promptManager();
