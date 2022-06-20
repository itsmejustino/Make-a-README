const inquirer = require("inquirer");
//declare variable that requrires the generateMarkdown file. This will allow to call on generateMarkdown that was a module.export 
let theLicense = require("./utils/generateMarkdown.js");
const fs = require("fs");

//initialize the application. 
init = () => {
  //iniquirer.prompt will prompt user in console when given type, name, and message in an object. Message will be displayed message.
  inquirer
    .prompt([
      {
        type: "input",
        message: "What would you like to name the title of this README?",
        name: "title",
      },
      {
        type: "input",
        message:
          "What is the description of your application to add to the README section?",
        name: "description",
      },

      {
        type: "input",
        message: "Instructions for installing and using your application?",
        name: "installation",
      },

      {
        type: "input",
        message: "Describe how to use the features in your application.",
        name: "usage",
      },

      {
        type: "input",
        message: "How can someone contribute to the project?",
        name: "contribution",
      },

      {
        type: "input",
        message:
          "Provide a description of how to run tests on your application.",
        name: "test",
      },

      {
        type: "list",
        name: "license",
        message: "Choose a license for this application",
        choices: ["Apache 3.0", "BSD 2.0", "BSD 3.0","GPL v.3", "IPL 1.0", "MIT", "None"],
      },
      {
        type: "input",
        message: "What is your github username??",
        name: "username",
      },
      {
        type: "email",
        message: "What is your email address?",
        name: "email",
      },
    ])
    .then((input) =>
      fs.writeFile(
        //write a README file every time index.js is run 
        "README.md",
//string interpolate each input element into README.md txt and format.
        `
# ${JSON.parse(JSON.stringify(input.title))}<br>
## Table of Contents <br>
[Description](#description)<br>
[License](#license)<br>
[Install-Instructions](#install-Instructions)<br>
[Usage-Info](#usage-Info)<br>
[Contribute](#contribute)<br>
[Questions](#questions)<br>
[Tests](#tests)<br>

## Description 
  ${JSON.parse(JSON.stringify(input.description))}
## License
  ${theLicense(input.license)}
## Install-Instructions 
  ${JSON.parse(JSON.stringify(input.installation))}
## Usage-Info
  ${JSON.parse(JSON.stringify(input.usage))}
## Contribute
  ${JSON.parse(JSON.stringify(input.contribution))}

## Questions 
If you are interested in contacting me or contributing to this project, please contact me via email and create a pull request to this repo.
### Github Username: 
https://github.com/${JSON.parse(JSON.stringify(input.username))}
### Email me at: 
  ${JSON.parse(JSON.stringify(input.email))} 
## Tests 
  ${JSON.parse(JSON.stringify(input.test))}
`,

        (err) => (err ? console.error(err) : console.log("Success!"))
      )
    );
};
//initialize function. this will trigger when index.js is loaded.
init();
