function generateTeam() {
    inquirer.prompt(managerQuestions).then((managerAnswers) => {
      const manager = new Manager(
        managerAnswers.managerName,
        managerAnswers.managerId,
        managerAnswers.managerEmail,
        managerAnswers.officeNumber
      );
      teamMembers.push(manager);
      addTeamMember();
    });
  
    function addTeamMember() {
      inquirer.prompt(teamMemberQuestions).then((memberAnswers) => {
        switch (memberAnswers.memberType) {
          case "Engineer":
            inquirer
              .prompt(engineerQuestions)
              .then((engineerAnswers) => {
                const engineer = new Engineer(
                  engineerAnswers.engineerName,
                  engineerAnswers.engineerId,
                  engineerAnswers.engineerEmail,
                  engineerAnswers.github
                );
                teamMembers.push(engineer);
                addTeamMember();
              });
            break;
          case "Intern":
            inquirer.prompt(internQuestions).then((internAnswers) => {
              const intern = new Intern(
                internAnswers.internName,
                internAnswers.internId,
                internAnswers.internEmail,
                internAnswers.school
              );
              teamMembers.push(intern);
              addTeamMember();
            });
            break;
          case "Done":
            const teamHTML = generateTeamHTML(teamMembers);
            fs.writeFile(outputPath, teamHTML, (err) => {
              if (err) {
                console.error(err);
              } else {
                console.log("Team profile generated successfully!");
              }
            });
            break;
        }
      });
    }
  }
  